<script lang="ts">
    import InfoBox from '../../components/forms/InfoBox.svelte'
    import RegistrationForm from '../../components/forms/RegistrationForm.svelte'
    import Button from '../../components/forms/Button.svelte'
    import { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import { loading, baseURL, showBack } from '../../helpers/stores'
    import { _ } from 'svelte-i18n'
    import { onMount } from 'svelte'
    import { dev } from '$app/env'

    export let dto: RegistrationDTO = null

    showBack.set(true)

    let form
    let registrationID: string
    let initialLoad: boolean = false
    let disabled: boolean = false
    let errors: string[] = []
    let formChanged: boolean = false
    let deadline: boolean = new Date() > new Date('Jun 30 2022 23:59:59 GMT+0200')

    async function saveForm() {
        if (form.reportValidity('#firstName, #lastName, #email, #dateOfBirth, #country')) {
            errors = form.getInvalid()
            console.log(`saving registration ${registrationID}: ${JSON.stringify(dto)}`)
            $loading = true
            const response = await fetch(new URL(`registration.php?key=${registrationID}`, dev ? 'http://localhost:8080' : `${window.location.origin}/api/`).toString(), {
                method: 'POST',
                body: JSON.stringify(dto)
            })
            // TODO: Fileupload
            $loading = false
            formChanged = false
            if (response.status === 200) {
                return true
            } else {
                // TODO: display error
                return false
            }
        }
        return false
    }

    $: if (form) {
        errors = form.getInvalid()
        disabled = true && !dev
    }

    onMount(async () => {
        $loading = true
        registrationID = window.location.search.substring(1)
        console.log(`loading registration ${registrationID}`)
        if (registrationID === '1') {
            dto = JSON.parse('{"firstName":"Ernst","lastName":"Haft","email":"ernsthaft@web.de","dateOfBirth":"2001-01-11","country":"AX","scoreConfirmations":[true,false,false],"reg_key":"1","proofOfPayment":"proof.pdf","instrumentation":[[false],[false],[false],[false],[false],[false],[false],[true,false],[false,true],[false],[true],[false],[true,true],[false],[false],[false],[false],[false],[false],[true,true,true,true,false,false],[false,false,true,true,false],[true,true,true,true],[true,false,false],[false,false]],"pieceDemo":"","pieceScore":"score.pdf","idCopy":"id.jpeg","pieceTitle":"My piece"}')
        } else {
            const response = await fetch(new URL(`registration.php?key=${registrationID}`, dev ? 'http://localhost:8080' : `${window.location.origin}/api/`).toString())
            if (response.status === 200) {
                let responseDto = JSON.parse(await response.text())
                console.log(responseDto)
                dto = Object.assign(new RegistrationDTO, Object.fromEntries(Object.entries(responseDto).filter(([_, v]) => v !== null)))
                console.log(dto)
            }
        }
        $loading = false
        initialLoad = true
    })
</script>

<h1 class="cover-heading"><b>{$_('registration.yourRegistration')}</b></h1>
{#if dto}
    {#if !deadline}
        <InfoBox type="info">
            {$_('registration.editingAllowedUntil')} {$_('registration.confirmationAfterDeadline')}
        </InfoBox>
    {/if}
    {#if errors.length === 0}
        <InfoBox type="success">
            {$_('registration.complete')}
        </InfoBox>
    {:else}
        <InfoBox type="warning">
            {$_('registration.missingForComplete')}
            <ul>
                {#each errors as error}
                    <li>{$_(error)}</li>
                {/each}
            </ul>
        </InfoBox>
    {/if}
    <RegistrationForm
        bind:this={form}
        {disabled}
        bind:dto
        bind:changed={formChanged}
    >
        {#if !disabled}
            <Button
                type="outline"
                on:click={() => disabled = true}
            >
                {$_('registration.form.cancel')}
            </Button>
        {:else}
            <div></div>
        {/if}
        {#if !deadline}
            <Button
                type="primary"
                on:click={async () => {
                    disabled = !disabled && (!formChanged || await saveForm())
                    disabled && document.getElementById('back').click()
                    disabled && form.closeSubsections()
                }}
            >
                {!disabled ? $_('registration.form.save') : $_('registration.form.edit')}
            </Button>
        {/if}
    </RegistrationForm>
{:else if initialLoad}
    <div class="center">
        {$_('registration.notfound')}
        <a href="/" class="link">{$_('error.goBack')}</a>
    </div>
{/if}

<style lang="stylus">
    .center
        height 80vh
        display flex
        gap 10px
        flex-direction column
        align-items center
        justify-content center
    
    li
        margin-top 5px
</style>
