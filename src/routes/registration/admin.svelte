<script lang="ts">
    import RegistrationsTable from "../../components/admin/RegistrationsTable.svelte"
    import Input from "../../components/forms/Input.svelte"
    import Button from "../../components/forms/Button.svelte"
    import InfoBox from "../../components/forms/InfoBox.svelte"
    import Mailer from "../../components/admin/Mailer.svelte"
    import type { RegistrationDTO } from "../../helpers/RegistrationDTO"
    import { loading, baseURL } from '../../helpers/stores'
    import { getAuth } from '../../helpers'
    import { onMount } from "svelte"
    import { _ } from 'svelte-i18n'

    let confirmed: RegistrationDTO[]
    let unconfirmed: RegistrationDTO[]
    let password: string
    let initialLoad: boolean = false
    let error: string = ''
    let dialog: string = ''
    let showMailer: boolean = false

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
        <div class="dashboard">
            <h1>Admin panel</h1>
            <div class="actions">
                <Button
                    type="primary"
                    slim
                    on:click={() => showMailer = true}
                >
                    Send mail
                </Button>
            </div>
            <div class="registrations">
                <h2>Confirmed registrations</h2>
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
                <h2>Unconfirmed registrations</h2>
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
        </div>
        {#if dialog}
            <dialog open class="message">
                <p>{dialog}</p>
                <Button type="primary" slim on:click={() => dialog = ''}>OK</Button>
            </dialog>
        {/if}
        {#if showMailer}
            <dialog open>
                <Mailer
                    {password}
                    bind:show={showMailer}
                />
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

        .dashboard
            h1
                margin-bottom 20px

            .registrations
                margin-top 50px

                h2
                    margin-bottom 20px

            .actions
                display grid
                grid-template-columns repeat(auto-fill, 150px)
        
        dialog
            position fixed
            z-index 5
            top 50%
            transform translateY(-50%)
            border-radius 5px
            overflow-y auto
            max-height 85vh
            max-width 98vw

            &.message
                white-space pre-wrap

            p
                overflow-wrap break-word

    @media screen and (max-width 525px)
        .admin .login
            width 75%
</style>