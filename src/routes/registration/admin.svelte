<script lang="ts">
    import RegistrationsTable from "../../components/admin/RegistrationsTable.svelte"
    import Input from "../../components/forms/Input.svelte"
    import Button from "../../components/forms/Button.svelte"
    import InfoBox from "../../components/forms/InfoBox.svelte"
    import type { RegistrationDTO } from "../../helpers/RegistrationDTO"
    import { loading, baseURL } from '../../helpers/stores'
    import { onMount } from "svelte"
    import { _ } from 'svelte-i18n'

    let confirmed: RegistrationDTO[]
    let unconfirmed: RegistrationDTO[]
    let password: string
    let initialLoad: boolean = false
    let error: string = ''
    let dialog: string = ''

    const getAuth = (pass: string): HeadersInit => { return { 'Authorization': `Basic ${btoa('admin:' + pass)}` }}

    async function login(): Promise<boolean> {
        $loading = true
        const response = await fetch(new URL('admin.php', $baseURL), {
            method: 'POST',
            headers: getAuth(password)
        })
        if (response.ok) {
            ({ confirmed, unconfirmed } = await response.json())
            localStorage.setItem('adminPassword', password)
        } else if (response.status === 401) {
            error = 'admin.error.incorrectPass'
        } else {
            error = 'admin.error.unknown'
        }
        $loading = false
        return error === ''
    }

    async function updateBoolean(
        reg_key: string,
        column: 'payment' | 'complete' | 'second',
        value: boolean
    ): Promise<void> {
        $loading = true
        const response = await fetch(new URL('admin.php', $baseURL), {
            method: 'POST',
            headers: {
                ...getAuth(password),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                reg_key,
                [column]: String(value)
            })
        })
        dialog = await response.text()
        $loading = false
    }

    onMount(async () => {
        password = localStorage.getItem('adminPassword')
        password && await login()
        initialLoad = true
    })
</script>
<div class="admin">
    {#if initialLoad && !confirmed}
        <div class="login">
            <div class="form">
                <Input
                    type="password"
                    name="password"
                    label={'admin.password'}
                    bind:value={password}
                    on:keyup={(e) => e.key === 'Enter' && login()}
                />
                <Button
                    type="primary"
                    slim
                    disabled={$loading}
                    on:click={async () => await login()}
                >
                    Login
                </Button>
            </div>
            {#if error}
                <InfoBox type="error">
                    {$_(error)}
                </InfoBox>
            {/if}
        </div>
    {:else if initialLoad}
        <div class="registrations">
            <h1 class="cover-heading">Confirmed registrations</h1>
            {#if confirmed && confirmed.length}
                <RegistrationsTable
                    registrations={confirmed}
                    on:dialog={(e) => dialog = e.detail}
                    on:updateBoolean={(e) =>
                        updateBoolean(e.detail.reg_key, e.detail.column, e.detail.value)
                    }
                />
            {:else}
                    No confirmed registrations
            {/if}
        </div>
        <div class="registrations">
            <h1 class="cover-heading">Unconfirmed registrations</h1>
            {#if unconfirmed && unconfirmed.length}
                <RegistrationsTable
                    registrations={unconfirmed}
                    confirmed={false}
                    on:dialog={(e) => dialog = e.detail}
                />
            {:else}
                No unconfirmed registrations
            {/if}
        </div>
        {#if dialog}
            <dialog open>
                <p>{dialog}</p>
                <Button type="primary" slim on:click={() => dialog = ''}>OK</Button>
            </dialog>
        {/if}
    {/if}
</div>

<style lang="stylus">
    .admin
        .login
            height 100%
            width 50%
            margin auto
            display flex
            flex-direction column
            row-gap 15px

            .form
                display grid
                grid-template-columns 2fr 1fr
                column-gap 15px
                align-items end

        .registrations:not(:first-child)
            margin-top 100px
        
        dialog
            position fixed
            white-space pre-wrap
            z-index 5
            top 50%
            transform translateY(-50%)
            border-radius 5px
            overflow-y auto
            max-height 85vh
            max-width 98vw

            p
                overflow-wrap break-word

    @media screen and (max-width 525px)
        .admin .login
            width 75%
</style>