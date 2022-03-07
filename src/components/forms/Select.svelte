<script lang="ts">
    export let name: string
    export let label: string
    export let disabled: boolean = false
    export let value: string
    export let options: string[][]
</script>

<div>
    <label for={name}>{label}</label>
    <div class="background" {disabled}>
        <select id={name} type="select" bind:value on:input {disabled} required>
            {#each options as option}
                <option value={option[0]}>
                    {option[1]}
                </option>
            {/each}
        </select>
    </div>
</div>

<style lang="stylus">
    @require 'input.styl'

    select
        appearance none

        &:hover:enabled
            cursor pointer
    
    .background
        position relative

        &:after
            content ''
            width 12px
            height 40px
            position absolute
            right 0
            background no-repeat center url("data:image/svg+xml,%3csvg width='12px' height='6px' viewBox='0 0 12 6' xmlns='http://www.w3.org/2000/svg' %3e %3cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'%3e %3cpolyline id='Line-Copy-3' stroke='black' stroke-width='2' transform='translate(6.000000%2c 3.000000) scale(-1%2c 1) translate(-6.000000%2c -3.000000) ' points='1 1 6.05076272 5 11 1'%3e%3c/polyline%3e %3c/g%3e%3c/svg%3e")
            margin-right 10px
            pointer-events none

    .background[disabled="true"]:after
        opacity 0.5
</style>