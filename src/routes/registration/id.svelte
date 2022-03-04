<script lang="ts">
    import RegistrationForm from '../../components/forms/RegistrationForm.svelte'
    import Button from '../../components/forms/Button.svelte'
    import type { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import { loading } from '../../helpers/stores'
    import { _ } from 'svelte-i18n'
    import { onMount } from 'svelte'

    export let dto: RegistrationDTO

    let registrationID: string
    let initialLoad: boolean = false
    let editing: boolean = false
    let disabled: boolean = true

    function saveForm() {
        console.log(`saving registration ${registrationID}`)
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
        }, 750)
    })
</script>

{#if dto && !$loading}
    <RegistrationForm
        {disabled}
        bind:dto
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
                if (!editing) {
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

</style>