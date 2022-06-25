<script lang="ts">
    import type { RegistrationDTO } from "../../helpers/RegistrationDTO"
    import { loading, baseURL } from '../../helpers/stores'
    import { onMount } from "svelte"
    import RegistrationsTable from "../../components/admin/RegistrationsTable.svelte"

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

<div>
    {#if confirmed && confirmed.length}
        <h1 class="cover-heading">Confirmed registrations</h1>
        <RegistrationsTable
            registrations={confirmed}
        />
    {:else}
            No confirmed registrations
    {/if}
</div>
<div>
    <h1 class="cover-heading">Unconfirmed registrations</h1>
    {#if unconfirmed && unconfirmed.length}
        <RegistrationsTable
            registrations={unconfirmed}
            confirmed={false}
        />
    {:else}
        No unconfirmed registrations
    {/if}
</div>

<style lang="stylus">
    div + div
        margin-top 100px
</style>