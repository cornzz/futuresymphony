<script lang="ts">
    import { orchestra } from '../../helpers/orchestra'
    import Checkbox from './Checkbox.svelte'
    import { highlightElement } from '../../helpers'
    import { _ } from 'svelte-i18n'
	import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher();

    export let selected: boolean[][] = orchestra.map(e => Array(e.max).fill(false))
    export let disabled: boolean = false

    let maxWarning

    $: totalSelected = selected.reduce((a, b) => a + b.reduce((c, d) => Number(c) + Number(d), 0), 0)
</script>

<div>
    <label for="instrumentation" data-label={'registration.form.instrumentation'}>{$_('registration.form.instrumentation')}</label>
    <div class="instrumentation" {disabled}>
        {#if totalSelected < 30}
            {@html $_('registration.form.min30')}
            <input id="instrumentation" style="display: none" required>
        {/if}
        {@html $_('registration.form.youSelected', { values: { number: totalSelected } })}
        {#if totalSelected === 35}
            <span class="highlight" bind:this={maxWarning}>{@html $_('registration.form.max30')}</span>
        {/if}
        <div class="checkboxes">
            {#each orchestra as instrument, i}
                <div class="row">
                    {#each Array(instrument.max) as x, j}
                        <Checkbox
                            name={`${instrument.name}_${j}`}
                            label={`${$_(`orchestra.${instrument.name}`)}${instrument.max > 1 ? ` ${j+1}` : ''}`}
                            fullwidth={instrument.max === 1}
                            on:input={(e) => {
                                // @ts-ignore
                                e.target.checked = totalSelected === 35 ? false : e.target.checked
                                dispatch('input')
                            }}
                            on:click={(e) => {
                                // @ts-ignore
                                totalSelected === 35 && !e.target.checked && highlightElement(maxWarning)
                            }}
                            bind:checked={selected[i][j]}
                            disabled={disabled || totalSelected === 35 && !selected[i][j]}
                        />
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</div>

<style lang="stylus">
    label
        font-size 14px
        line-height 24px
        white-space nowrap

    .instrumentation
        border-radius var(--border-radius)
        border solid 1px var(--color-border)
        padding 5px

        &[disabled="true"]
            background-color var(--color-background)

        .checkboxes
            margin-top 10px
            columns 2

            .row
                display flex
                column-gap 20px
                flex-wrap wrap
                padding 5px

                &:not(:last-child)
                    margin-bottom 10px
</style>
