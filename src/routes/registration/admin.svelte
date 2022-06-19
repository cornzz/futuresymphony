<script lang="ts">
    import type { RegistrationDTO } from "../../helpers/RegistrationDTO"
    import { loading, baseURL } from '../../helpers/stores'
    import { onMount } from "svelte"

    let confirmed: RegistrationDTO[]
    let unconfirmed: RegistrationDTO[]
    let password: string = 'admin'

    onMount(async () => {
        $loading = true
        const headers = new Headers({ 'Authorization': `Basic ${btoa('admin:' + password)}` })
        const response = await fetch(new URL('admin_new.php', $baseURL), {
            method: 'POST',
            headers
        })
        ;({ confirmed, unconfirmed } = await response.json())
        $loading = false
    })
</script>

{#if confirmed && confirmed.length}
    <h1 class="cover-heading">Confirmed registrations</h1>
    <div class="wrapper">
        {JSON.stringify(confirmed)}
    </div>
{/if}
{#if unconfirmed && unconfirmed.length}
    <h1 class="cover-heading">Unconfirmed registrations</h1>
    <div class="wrapper">
        {JSON.stringify(unconfirmed)}
    </div>
{/if}

<style lang="stylus">
    .wrapper
        overflow-x scroll
</style>