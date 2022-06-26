<script lang="ts">
    import { _ } from "svelte-i18n"
    import type { RegistrationDTO } from "../../helpers/RegistrationDTO"
    import { baseURL } from "../../helpers/stores"
    import { referrers } from "../../helpers/selectData"
    import { orchestra } from "../../helpers/orchestra"
    import { createEventDispatcher } from "svelte"

    export let registrations: RegistrationDTO[]
    export let confirmed: boolean = true

    const dispatch = createEventDispatcher()

    let numRows

    function showInstrumentation(instrumentation: boolean[][]) {
        let text = instrumentation
            .map((instrument, index) => `${instrument.filter(Boolean).length}x ${orchestra[index].name}`)
            .filter(instrument => !instrument.startsWith('0')).join('\n')
        showContent(text)
    }

    const showContent = (content: string) => dispatch('dialog', content)

    function mapReferrer(referrer: string) {
        const ref = referrers.find(option => option[0] === referrer)
        const mapped = ref ? ref[1][0] === '$' ? $_(ref[1].slice(1)) : ref[1] : referrer
        return mapped
    }
</script>

<div class="wrapper">
    Show
    <select bind:value={numRows}>
        {#each [10, 20, 50, 100] as num}
            <option value={num}>{num}</option>
        {/each}
    </select>
    registrations
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Key</th>
                <th>E-mail</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Date of Birth</th>
                <th>Country</th>
                <th>Reg. Date</th>
                {#if confirmed}
                    <th>ID document</th>
                    <th>Piece title</th>
                    <th>Annotation</th>
                    <th>Score</th>
                    <th>Demo file</th>
                    <th>Instrumentation</th>
                    <th>Remarks</th>
                    <th>Score confirmations</th>
                    <th>Proof of payment</th>
                    <th>Billing address</th>
                    <th>Referrer</th>
                    <th>Payment confirmed</th>
                    <th>Registration complete</th>
                    <th>Second round</th>
                {/if}
            </tr>
        </thead>
        {#each registrations.slice(0, numRows) as reg}
            <tr>
                <td>{reg.id}</td>
                <td>
                    {#if confirmed}
                        <a class="link" href={`/registration/id?${reg.reg_key}`} target="_blank">{reg.reg_key}</a>
                    {:else}
                        <span>{reg.reg_key}</span>
                    {/if}
                </td>
                <td>
                    <a class="link" href={`mailto:${reg.email}`}>{reg.email}</a>
                </td>
                <td>{reg.firstName}</td>
                <td>{reg.lastName}</td>
                <td>{reg.dateOfBirth}</td>
                <td>{reg.country}</td>
                <td>{reg.registrationDate ?? ''}</td>
                {#if confirmed}
                    <td>
                        {#if reg.idCopy}
                            <a
                                class="link"
                                href={new URL(
                                    `/api/files.php?key=${reg.reg_key}&file=idCopyFile`,
                                    $baseURL
                                ).toString()}
                                target="_blank"
                                data-label={reg.idCopy}
                            >
                                Download
                            </a>
                        {/if}
                    </td>
                    <td>{reg.pieceTitle ?? ''}</td>
                    <td>
                        {#if reg.annotation}
                            <span class="link" on:click={() => showContent(reg.annotation)}>Show</span>
                        {/if}
                    </td>
                    <td>    
                        {#if reg.pieceScore}
                            <a
                                class="link"
                                href={new URL(
                                    `/api/files.php?key=${reg.reg_key}&file=pieceScoreFile`,
                                    $baseURL
                                ).toString()}
                                target="_blank"
                                data-label={reg.pieceScore}
                            >
                                Download
                            </a>
                        {/if}
                    </td>
                    <td>
                        {#if reg.pieceDemo}
                            <a
                                class="link"
                                href={new URL(
                                    `/api/files.php?key=${reg.reg_key}&file=pieceDemoFile`,
                                    $baseURL
                                ).toString()}
                                target="_blank"
                                data-label={reg.pieceDemo}
                            >
                                Download
                            </a>
                        {/if}
                    </td>
                    <td>
                        {#if reg.instrumentation}
                            <span class="link" on:click={() => showInstrumentation(reg.instrumentation)}>Show</span>
                        {/if}    
                    </td>
                    <td>    
                        {#if reg.remarks}
                            <span class="link" on:click={() => showContent(reg.remarks)}>Show</span>
                        {/if}
                    </td>
                    <td>{reg.scoreConfirmations ?? ''}</td>
                    <td>
                        {#if reg.proofOfPayment}
                            <a
                                class="link"
                                href={new URL(
                                    `/api/files.php?key=${reg.reg_key}&file=proofOfPaymentFile`,
                                    $baseURL
                                ).toString()}
                                target="_blank"
                                data-label={reg.proofOfPayment}
                            >
                                Download
                            </a>
                        {/if}    
                    </td>
                    <td>{reg.billingAddress ?? ''}</td>
                    <td>{reg.referrer ? mapReferrer(reg.referrer) : ''}</td>
                    <td>{reg.paymentConfirmed}</td>
                    <td>{reg.complete}</td>
                    <td>{reg.secondRound ?? ''}</td>
                {/if}
            </tr>
        {/each}
    </table>
</div>

<style lang="stylus">
    .wrapper
        overflow-x scroll
        font-size 14px

        table
            width 100%
            font-size 12px

            td
                text-align center

                .link
                    position relative
            
                    &[data-label]:hover:after
                        content attr(data-label)
                        position absolute
                        top 14px
                        left 14px
                        border-radius 2px
                        padding 2px
                        background-color #ccc
                        z-index 50
</style>