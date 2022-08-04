<script lang="ts">
    import { _, locale } from "svelte-i18n"
    import type { RegistrationDTO } from "../../helpers/RegistrationDTO"
    import type { Criterion } from '../../helpers/types'
    import { baseURL } from "../../helpers/stores"
    import { referrers } from "../../helpers/selectData"
    import { orchestra } from "../../helpers/orchestra"
    import { createEventDispatcher } from "svelte"

    export let registrations: RegistrationDTO[]
    export let confirmed: boolean = true

    const dispatch = createEventDispatcher()

    let numRows: number
    let showAll: boolean
    let paymentCriterion: Criterion = { active: false, value: true }
    let completeCriterion: Criterion = { active: true, value: true }
    let secondCriterion: Criterion = { active: true, value: true }
    let filteredRegistrations: RegistrationDTO[]

    $: filteredRegistrations = !confirmed ? registrations : registrations.filter(reg =>
        (paymentCriterion.active ? reg.paymentConfirmed === paymentCriterion.value : true) &&
        (completeCriterion.active ? reg.complete === completeCriterion.value : true) &&
        (secondCriterion.active ? reg.secondRound === secondCriterion.value : true)
    )

    function showInstrumentation(instrumentation: boolean[][]): void {
        let text = instrumentation
            .map((instrument, index) => `${instrument.filter(Boolean).length}x ${orchestra[index].name}`)
            .filter(instrument => !instrument.startsWith('0')).join('\n')
        showContent(text)
    }

    const sendMail = (recipient: string): void => dispatch('sendMail', recipient)

    const showContent = (content: string): void => dispatch('dialog', content)

    function mapReferrer(referrer: string): string {
        const ref = referrers.find(option => option[0] === referrer)
        const mapped = ref ? ref[1][0] === '$' ? $_(ref[1].slice(1)) : ref[1] : referrer
        return mapped
    }

    function updateBoolean(reg_key: string, column: string, selection: HTMLSelectElement): void {
        dispatch('updateBoolean', { reg_key, column, value: selection.value })
    }

    function copyColumnName(event: MouseEvent): void {
        const target = event.target as HTMLElement
        const column = target.dataset.label
        navigator.clipboard.writeText(column)
        target.dataset.label = 'copied ✔'
        setTimeout(() => target.dataset.label = column, 1000)
    }
</script>

<div class="controls">
    {$_('admin.table.show')}
    <select bind:value={numRows}>
        {#each [5, 10, 25, 50, 100] as num}
            <option value={num}>{num}</option>
        {/each}
    </select>
    {$_('admin.table.rows')} | {$_('admin.table.total')}: <b>{filteredRegistrations.length}</b> |
    <label>
        <input type="checkbox" bind:checked={showAll}/>
        {$_('admin.table.showAll')}
    </label>
    {#if confirmed}
        |
        <label>
            <input type="checkbox" bind:checked={paymentCriterion.active}/>
            payment
        </label>
        <select disabled={!paymentCriterion.active} bind:value={paymentCriterion.value}>
            <option value={true}>true</option>
            <option value={false}>false</option>
        </select>
        <label>
            <input type="checkbox" bind:checked={completeCriterion.active}/>
            complete
        </label>
        <select disabled={!completeCriterion.active} bind:value={completeCriterion.value}>
            <option value={true}>true</option>
            <option value={false}>false</option>
        </select>
        <label>
            <input type="checkbox" bind:checked={secondCriterion.active}/>
            second
        </label>
        <select disabled={!secondCriterion.active} bind:value={secondCriterion.value}>
            <option value={null}>TBD</option>
            <option value={true}>true</option>
            <option value={false}>false</option>
        </select>
    {/if}
</div>
<div class="wrapper">
    <table>
        <tr on:click={copyColumnName}>
            <th data-label="id">ID</th>
            <th data-label="reg_key">Key</th>
            <th data-label="email">E-mail</th>
            <th data-label="firstName">Name</th>
            <th data-label="lastName">Surname</th>
            <th data-label="dateOfBirth">Date of Birth</th>
            <th data-label="country">Country</th>
            <th data-label="registrationDate">Reg. Date</th>
            {#if confirmed}
                <th data-label="idCopy">ID document</th>
                <th data-label="pieceTitle">Piece title</th>
                <th data-label="annotation">Annotation</th>
                <th data-label="pieceScore">Score</th>
                <th data-label="pieceDemo">Demo file</th>
                <th data-label="instrumentation">Instrumentation</th>
                <th data-label="remarks">Remarks</th>
                <th data-label="scoreConfirmations">Score confirmations</th>
                <th data-label="proofOfPayment">Proof of payment</th>
                <th data-label="billingAddress">Billing address</th>
                <th data-label="referrer">Referrer</th>
                <th data-label="paymentConfirmed">Payment confirmed</th>
                <th data-label="complete">Registration complete</th>
                <th data-label="secondRound">Second round</th>
            {/if}
        </tr>
        {#each showAll ? filteredRegistrations : filteredRegistrations.slice(0, numRows) as reg}
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
                    <span class="link" on:click={() => sendMail(reg.email)}>
                        {reg.email}
                    </span>
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
                                {$_('admin.table.open')}
                            </a>
                        {/if}
                    </td>
                    <td>{reg.pieceTitle ?? ''}</td>
                    <td>
                        {#if reg.annotation}
                            <span class="link" on:click={() => showContent(reg.annotation)}>
                                {$_('admin.table.show')}
                            </span>
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
                                {$_('admin.table.open')}
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
                                {$_('admin.table.open')}
                            </a>
                        {/if}
                    </td>
                    <td>
                        {#if reg.instrumentation && reg.instrumentation.flat().some(v => v)}
                            <span class="link" on:click={() => showInstrumentation(reg.instrumentation)}>
                                {$_('admin.table.show')}
                            </span>
                        {/if}    
                    </td>
                    <td>
                        {#if reg.remarks}
                            <span class="link" on:click={() => showContent(reg.remarks)}>
                                {$_('admin.table.show')}
                            </span>
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
                                {$_('admin.table.open')}
                            </a>
                        {/if}    
                    </td>
                    <td>
                        {#if reg.billingAddress}
                            <span class="link" on:click={() => showContent(reg.billingAddress)}>
                                {$_('admin.table.show')}
                            </span>
                        {/if}
                    </td>
                    <td>{reg.referrer && $locale ? mapReferrer(reg.referrer) : ''}</td>
                    <td
                        class:success={reg.paymentConfirmed}
                        class:error={!reg.paymentConfirmed}
                    >
                        <select
                            bind:value={reg.paymentConfirmed}
                            on:input={(e) => updateBoolean(reg.reg_key, 'payment', e.currentTarget)}
                        >
                            <option value={true}>true</option>
                            <option value={false}>false</option>
                        </select>
                        {reg.paymentConfirmed}
                    </td>
                    <td
                        class:success={reg.complete}
                        class:error={!reg.complete}
                    >
                        <select
                            bind:value={reg.complete}
                            on:input={(e) => updateBoolean(reg.reg_key, 'complete', e.currentTarget)}
                        >
                            <option value={true}>true</option>
                            <option value={false}>false</option>
                        </select>
                        {reg.complete}
                    </td>
                    <td
                        class:success={reg.secondRound}
                        class:error={!reg.secondRound}
                        class:warning={reg.secondRound === null}
                    >
                        <select
                            bind:value={reg.secondRound}
                            on:input={(e) => updateBoolean(reg.reg_key, 'second', e.currentTarget)}
                        >
                            <option value={null}>TBD</option>
                            <option value={true}>true</option>
                            <option value={false}>false</option>
                        </select>
                        {reg.secondRound ?? 'TBD'}
                    </td>
                {/if}
            </tr>
        {/each}
    </table>
    {#if !filteredRegistrations.length}
        {$_('admin.table.noSuchReg')}
    {/if}
</div>
{#if !showAll && numRows < filteredRegistrations.length}
    <span class="center link" on:click={() => numRows += 5}>{$_('admin.table.showMore')}</span>
{/if}

<style lang="stylus">
    .controls
        font-size 14px
        margin-bottom 10px

        label
        input[type="checkbox"]
            cursor pointer

        select:enabled
            cursor pointer

    .wrapper
        overflow-x scroll
        font-size 14px
        border-bottom solid 0.5px var(--color-primary)

        table
            width 100%
            font-size 12px
            border-collapse collapse
            
            tr
                &:hover > *:not(th)
                    box-shadow inset 0 0 0 9999px rgba(0, 0, 0, .035)

                &:nth-child(even)
                    background-color #e5e5e5

                th
                    position relative
                    padding 0 5px
                    border-bottom solid 0.5px var(--color-primary)
                    cursor pointer

                td
                    position relative
                    text-align center

                    &.success
                        background-color var(--color-success)
                        color #fff
                    
                    &.error
                        background-color var(--color-error)
                    
                    &.warning
                        background-color var(--color-warning)
                    
                    .link
                        position relative
                    
                    select
                        opacity 0
                        position absolute
                        height 100%
                        width 100%
                        border none
                        top 50%
                        left 50%
                        transform translate(-50%, -50%)
                        cursor pointer
                
                th[data-label]:hover:after,
                td .link[data-label]:hover:after
                    content attr(data-label)
                    position absolute
                    top 85%
                    left 50%
                    border-radius 2px
                    padding 2px
                    background-color #ccc
                    font-weight 300
                    z-index 50
                    white-space nowrap

    .center
        display block
        width 100%
        text-align center
        margin-top 5px
        font-size 14px
</style>