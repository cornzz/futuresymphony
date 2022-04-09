<script lang="ts">
    import InfoBox from '../../components/forms/InfoBox.svelte'
    import RegistrationForm from '../../components/forms/RegistrationForm.svelte'
    import Button from '../../components/forms/Button.svelte'
    import { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import { loading, baseURL, showBack } from '../../helpers/stores'
    import { _ } from 'svelte-i18n'
    import { onMount, tick } from 'svelte'

    export let dto: RegistrationDTO = null

    showBack.set(true)

    let form: RegistrationForm
    let registrationID: string
    let initialLoad: boolean = false
    let disabled: boolean = false
    let invalidFields: string[] = []
    let error: [string, Object] = null
    let formChanged: boolean = false
    let cachedDto: RegistrationDTO = null
    let deadline: boolean = new Date() > new Date('Jun 30 2022 23:59:59 GMT+0200')

    async function saveForm(): Promise<boolean> {
        error = null
        await tick()
        if (form.reportValidity('#firstName, #lastName, #email, #dateOfBirth, #country, #idCopy, #pieceScore, #pieceDemo, #proofOfPayment')) {
            console.log(`saving registration ${registrationID}`)
            $loading = true
            // Submit form data
            let response = await fetch(new URL('registration.php', $baseURL).toString(), {
                method: 'POST',
                body: JSON.stringify(dto)
            })
            // If successful, upload files
            if (response.status === 200) {
                let data = new FormData()
                data.append("reg_key", registrationID)
                for (let file of Object.entries(dto.files)) {
                    file[1] && data.append(file[0], file[1][0])
                }
                response = await fetch(new URL(`files.php?key=${registrationID}`, $baseURL).toString(), {
                    method: 'POST',
                    body: data
                })
                // If successful, clean up
                if (response.status === 200) {
                    dto.files.idCopyFile = undefined
                    dto.files.pieceDemoFile = undefined
                    dto.files.pieceScoreFile = undefined
                    dto.files.proofOfPaymentFile = undefined
                    formChanged = false
                    $loading = false
                    invalidFields = form.getInvalid()
                    return true
                }
            }
            // One of the requests failed, display error
            let responseText = await response.text()
            if (responseText === 'Invalid form.') {
                error = ['registration.form.error.invalidForm', {}]
            } else if (responseText.startsWith('Invalid file type or size:')) {
                let invalidFiles = responseText.split(': ').pop()
                error = ['registration.form.error.fileError', { values: { files: invalidFiles } }]
            } else {
                error = ['registration.form.error.errorOccurred', {}]
            }
            $loading = false
        }
        return false
    }

    onMount(async () => {
        $loading = true
        registrationID = window.location.search.substring(1)
        console.log(`loading registration ${registrationID}`)
        if (registrationID === '1') {
            dto = JSON.parse('{"reg_key":"1","firstName":"Ernst","lastName":"Haft","email":"ernsthaft@web.de","dateOfBirth":"2001-01-11","country":"DE","pieceTitle":"My piece","pieceDemo":"","pieceScore":"score.pdf","idCopy":"","instrumentation":[[true],[true],[true],[true],[true],[true],[true],[true,true],[false,true],[false],[true],[false],[true,true],[false],[false],[false],[false],[false],[true],[true,true,true,true,true,true],[true,true,true,true,false],[true,true,true,true],[true,false,false],[false,false]],"scoreConfirmations":[true,false,false],"proofOfPayment":"","files":{"idCopyFile":null,"pieceScoreFile":null,"pieceDemoFile":null,"proofOfPaymentFile":null}}')
        } else {
            const response = await fetch(new URL(`registration.php?key=${registrationID}`, $baseURL).toString())
            if (response.status === 200) {
                let responseDto = JSON.parse(await response.text())
                dto = Object.assign(new RegistrationDTO, Object.fromEntries(Object.entries(responseDto).filter(([_, v]) => v !== null)))
            }
        }
        $loading = false
        initialLoad = true
        await tick()
        if (form) {
            invalidFields = form.getInvalid()
            disabled = true
        }
    })
</script>

<h1 class="cover-heading"><b>{$_('registration.yourRegistration')}</b></h1>
{#if dto}
    {#if !deadline}
        <InfoBox type="info">
            {$_('registration.editingAllowedUntil')} {$_('registration.confirmationAfterDeadline')}
        </InfoBox>
    {/if}
    {#if invalidFields.length === 0}
        <InfoBox type="success">
            {$_('registration.complete')}
        </InfoBox>
    {:else}
        <InfoBox type="warning">
            {$_('registration.missingForComplete')}
            <ul>
                {#each invalidFields as field}
                    <li>{$_(field)}</li>
                {/each}
            </ul>
        </InfoBox>
    {/if}
    {#if error}
        <InfoBox type="error">
            {$_(...error)}
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
                on:click={() => {
                    disabled = true
                    error = null
                    dto = { ...cachedDto }
                }}
                disabled={$loading}
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
                    disabled = !disabled && (!formChanged || await saveForm());
                    (disabled || error) && document.getElementById('back').click()
                    disabled && form.closeSubsections()
                    cachedDto = !disabled && !error ? JSON.parse(JSON.stringify(dto)) : cachedDto
                }}
                disabled={$loading}
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
