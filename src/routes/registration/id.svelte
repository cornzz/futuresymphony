<script lang="ts">
    import InfoBox from '../../components/forms/InfoBox.svelte'
    import RegistrationForm from '../../components/forms/RegistrationForm.svelte'
    import Button from '../../components/forms/Button.svelte'
    import type { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import { loading, baseURL } from '../../helpers/stores'
    import { _ } from 'svelte-i18n'
    import { onMount } from 'svelte'

    export let dto: RegistrationDTO = null

    let form
    let registrationID: string
    let initialLoad: boolean = false
    let editing: boolean = false
    let disabled: boolean = false
    let errors: string[] = []
    let formChanged: boolean = false

    async function saveForm() {
        errors = form.getInvalid()
        console.log(`saving registration ${registrationID}`)
        $loading = true
        await fetch(new URL('/api/registration.php', $baseURL).toString(), {
            method: 'POST',
            body: JSON.stringify(dto)
        })
        // TODO: Fileupload
        $loading = false
        formChanged = false
    }

    $: if (form) {
        errors = form.getInvalid()
        disabled = true
    }

    onMount(() => {
        $loading = true
        registrationID = window.location.search.substring(1)
        console.log(`loading registration ${registrationID}`)
        setTimeout(() => {
            if (registrationID === '1') {
                dto = JSON.parse('{"firstName":"Ernst","lastName":"Haft","email":"ernsthaft@web.de","dateOfBirth":"1990-01-01","country":"DE","idCopy":{"value":"","files": "undefined"}}')
            }
            $loading = false
            initialLoad = true
        }, 0)
    })
</script>

{#if dto}
    {#if errors.length === 0}
        <InfoBox type="success">
            Your registration is complete! 
        </InfoBox>
    {:else}
        <InfoBox type="warning">
            Following fields are missing for your registration to be complete:
            <ul>
                {#each errors as error}
                    <li>{error}</li>
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
        {#if editing}
            <Button
                type="outline"
                on:click={() => {
                    editing = false
                    disabled = true
                }}
            >
                Cancel
            </Button>
        {:else}
            <div></div>
        {/if}
        <Button
            type="primary"
            on:click={() => {
                editing = !editing
                disabled = !editing
                if (!editing && formChanged) {
                    saveForm()
                }
            }}
        >
            {editing ? 'Save' : 'Edit'}
        </Button>
    </RegistrationForm>
{:else if initialLoad}
    <div class="center">
        Registration not found.
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
</style>