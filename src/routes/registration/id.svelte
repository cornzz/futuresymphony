<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import RegistrationForm from '../../components/forms/RegistrationForm.svelte'
    import Button from '../../components/forms/Button.svelte'
    import { Circle2 } from 'svelte-loading-spinners'
    import type { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import { showLanding, showBack } from '../../helpers/stores'
    import { _ } from 'svelte-i18n'
    import { onMount } from 'svelte'

    export let dto: RegistrationDTO

    let registrationID: string
    let loading: boolean = true
    let editing: boolean = false
    let disabled: boolean = true

    showLanding.set(false)
    showBack.set(false)

    function saveForm() {
        console.log(`saving registration ${registrationID}`)
    }

    onMount(() => {
        registrationID = window.location.search.substring(1)
        console.log(`loading registration ${registrationID}`)
        setTimeout(() => {
            if (registrationID === '1') {
                dto = JSON.parse('{"firstName":"Ernst","lastName":"Haft","email":"ernsthaft@web.de","dateOfBirth":"1990-01-01","country":"DE"}')
            }
            loading = false
        }, 500)
    })
</script>

<Tab>
    <h1 class="cover-heading"><b>{$_('registration.yourRegistration')}</b></h1>
    <div class="wrapper">
        {#if !dto && loading}
            <div class="center">
                <Circle2 colorOuter="var(--color-primary)" colorCenter="var(--color-link)" />
            </div>
        {:else if dto && !loading}
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
        {:else}
            <div class="center">
                Registration not found.
                <a href="/" class="link">{$_('error.goBack')}</a>
            </div>
        {/if}
    </div>
</Tab>

<style lang="stylus">
    .wrapper
            height 100%

    .center
        height 100%
        display flex
        gap 10px
        flex-direction column
        align-items center
        justify-content center
</style>