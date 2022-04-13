<script lang="ts">
    import { _ } from 'svelte-i18n'
    import { createEventDispatcher } from 'svelte'

    export let name: string
    export let label: string
    export let value: string = ''
    export let options: string[][]
    export let otherOption: string = null
    export let optional: boolean = false
    export let disabled: boolean = false
    
    const dispatch = createEventDispatcher()

    let selectElement: HTMLSelectElement
    let otherElement: HTMLInputElement
    let other: boolean = false

    function handleInput(): void {
        other = selectElement.value === otherOption
        value = other && otherElement?.value ? otherElement.value : selectElement.value
        dispatch('input')
    }

    $: if (selectElement) {
        other = value && options.every(o => o[0] !== value) || [value, selectElement.value].includes(otherOption)
        if (options.some(o => o[0] === value) && selectElement.value !== otherOption) {
            selectElement.value = value
        } else if (otherElement && options.every(o => o[0] !== value)) {
            selectElement.value = otherOption
            otherElement.value = value
        }
    }
</script>

<div class="container">
    <div>
        <label for={name} data-label={label}>
            {$_(label)} {optional ? `(${$_('registration.form.optional')})` : ''}
        </label>
        <div class="background" {disabled}>
            <select
                id={name}
                type="select"
                bind:this={selectElement}
                on:input={handleInput}
                {disabled}
                required={!optional}
            >
                <option hidden value>{$_('registration.form.pleaseSelect')}</option>
                {#each options as option}
                    <option value={option[0]}>
                        {option[1][0] === '$' ? $_(option[1].slice(1)) : option[1]}
                    </option>
                {/each}
            </select>
        </div>
    </div>
    {#if other}
        <div>
            <label for={`${name}-other`} data-label={label}/>
            <input
                id={`${name}-other`}
                type="text"
                placeholder={$_('registration.form.pleaseEnter')}
                on:input={handleInput}
                bind:this={otherElement}
                {disabled}
                required={!optional}
            />
        </div>
    {/if}
</div>

<style lang="stylus">
    @require 'input.styl'

    .container
        display grid
        grid-auto-columns 1fr
        grid-auto-flow column
        column-gap 40px
        row-gap 5px
        align-items end

        .background
            position relative

            select
                appearance none
                -webkit-appearance none

                &:hover:enabled
                    cursor pointer

            &:after
                content ''
                width 12px
                height 40px
                position absolute
                right 0
                background no-repeat center url("data:image/svg+xml,%3csvg width='12px' height='6px' viewBox='0 0 12 6' xmlns='http://www.w3.org/2000/svg' %3e %3cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'%3e %3cpolyline id='Line-Copy-3' stroke='black' stroke-width='2' transform='translate(6.000000%2c 3.000000) scale(-1%2c 1) translate(-6.000000%2c -3.000000) ' points='1 1 6.05076272 5 11 1'%3e%3c/polyline%3e %3c/g%3e%3c/svg%3e")
                margin-right 10px
                pointer-events none

            &[disabled="true"]:after
                opacity 0.5
    
    @media screen and (max-width 525px)
        .container
            grid-auto-flow initial
            row-gap 5px
</style>