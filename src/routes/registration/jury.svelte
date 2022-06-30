<script lang="ts">
    import Button from '../../components/forms/Button.svelte'
    import { loading, baseURL } from '../../helpers/stores'
    import { _ } from 'svelte-i18n'
    import { onMount } from "svelte"
    import type { RegistrationDTO } from 'src/helpers/RegistrationDTO'

    let juryKey: string
    let dialog: string
    let registrations: {
        pieceTitle: string,
        annotation: string,
        download_key: string
    }[] = []

    onMount(async () => {
        $loading = true
        juryKey = window.location.search.substring(1)
        const response = await fetch(new URL(`files.php?jury=${juryKey}`, $baseURL), {
            method: 'GET'
        })
        if (response.ok) {
            registrations = await response.json()
        } else {
            dialog = 'Invalid access key.'
        }
        $loading = false
    })
</script>

<div class="wrapper">
    {#if registrations.length}
        <h1 class="cover-heading">{$_('jury.title')}</h1>
        <table>
            <tr>
                <th class="title">{$_('registration.form.pieceTitle')}</th>
                <th>{$_('registration.form.annotation')}</th>
                <th>{$_('registration.form.pieceScore')}</th>
                <th>{$_('registration.form.pieceDemo')}</th>
            </tr>
            {#each registrations as reg}
                <tr>
                    <td class="title">{reg.pieceTitle}</td>
                    <td>
                        <span class="link" on:click={() => dialog = reg.annotation}>
                            {$_('admin.table.show')}
                        </span>
                    </td>
                    <td>
                        <a
                            class="link"
                            href={new URL(
                                `/api/files.php?key=${reg.download_key}&jury=${juryKey}&file=pieceScoreFile`,
                                $baseURL
                            ).toString()}
                            target="_blank"
                        >
                            {$_('admin.table.open')}
                        </a>
                    </td>
                    <td>
                        <a
                            class="link"
                            href={new URL(
                                `/api/files.php?key=${reg.download_key}&jury=${juryKey}&file=pieceDemoFile`,
                                $baseURL
                            ).toString()}
                            target="_blank"
                        >
                            {$_('admin.table.open')}
                        </a>
                    </td>
                </tr>
            {/each}
        </table>
    {/if}
</div>
{#if dialog}
    <dialog open class="message">
        <p>{dialog}</p>
        <Button type="primary" slim on:click={() => dialog = ''}>OK</Button>
    </dialog>
{/if}

<style lang="stylus">
    .wrapper
        table
            width 100%
            border-collapse collapse
            border solid 1px var(--color-border)
            background-color #fff
            border-radius 5px

            tr
                &:not(:last-child)
                    border-bottom solid 1px var(--color-border)

                th
                    font-weight 400
                    padding 5px 20px 0
                    border-bottom solid 1px var(--color-primary)

                    &:first-child
                        border-top-left-radius 5px

                    &:last-child
                        border-top-right-radius 5px
                td
                    padding 15px 20px
                    text-align center
                
                .title
                    text-align left

    @media screen and (max-width 525px)
        .wrapper table tr
            th
                padding 5px 10px 0
            
            td
                padding 10px 10px
</style>