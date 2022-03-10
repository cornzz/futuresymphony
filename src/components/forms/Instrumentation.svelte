<script lang="ts">
    import { orchestra } from '../../helpers/orchestra'
    import Checkbox from './Checkbox.svelte'
    import { _ } from 'svelte-i18n'
	import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher();

    export let selected: boolean[][] = orchestra.map(e => Array(e.max).fill(0))
    export let disabled: boolean = false

    $: totalSelected = selected.reduce((a, b) => a + b.reduce((c, d) => Number(c) + Number(d), 0), 0)
</script>

<div class="instrumentation">
    {#if totalSelected < 30}
        {@html $_('registration.form.min30')}
        <label for="instrumentation" style="display: none" data-label={'registration.form.instrumentation'}></label>
        <input id="instrumentation" style="display: none" required>
    {/if}
    {@html $_('registration.form.youSelected', { values: { number: totalSelected } })}
    {#if totalSelected === 35}
        {@html $_('registration.form.max30')}
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
                            e.target.checked = totalSelected > 34 ? false : e.target.checked
                            dispatch('input')
                        }}
                        bind:checked={selected[i][j]}
                        {disabled}
                    />
                    <!-- // @ts-ignore
                    selected[i] = e.target.checked ? 1 : -1 -->
                {/each}
            </div>
        {/each}
    </div>
</div>

<style lang="stylus">
    .instrumentation
        margin-top 15px

    .checkboxes
        margin-top 10px
        columns 2
        background-color var(--color-background)
        border-radius var(--border-radius)
        border solid 1px var(--color-border)

        .row
            display flex
            column-gap 20px
            flex-wrap wrap
            padding 5px

            &:not(:last-child)
                margin-bottom 10px
</style>
