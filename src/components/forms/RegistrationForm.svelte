<script lang="ts">
    import Input from '../../components/forms/Input.svelte'
    import Select from '../../components/forms/Select.svelte'
    import FileInput from './FileInput.svelte'
    import Checkbox from '../../components/forms/Checkbox.svelte'
    import FormGroup from '../../components/forms/FormGroup.svelte'
    import { _ } from 'svelte-i18n'
    import { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import { countries } from '../../helpers/countryCodes'
    import { onMount } from 'svelte'

    export let disabled: boolean = false
    export let newRegistration: boolean = false
    export let dto: RegistrationDTO
    export let regulationsAccepted: boolean = true
    export let changed: boolean = false

    let inputTimeout = null
    let saveIndicator
    let saveIndicatorTimeout1 = null
    let saveIndicatorTimeout2 = null

    export function reportValidity(): boolean {
        let inputElements: Array<HTMLInputElement | HTMLSelectElement> = Array.from(document.querySelectorAll('input, select'))
        return inputElements.every(e => e.reportValidity())
    }

    export function getInvalid(): string[] {
        let inputElements: Array<HTMLInputElement | HTMLSelectElement> = Array.from(document.querySelectorAll('input, select'))
        return inputElements.filter(e => e.validationMessage).map(e => e.labels[0].textContent.split('(')[0].trim())
    }

    export function saveForm(): void {
        if (newRegistration) {
            console.log('saving...')
            clearTimeout(saveIndicatorTimeout1)
            clearTimeout(saveIndicatorTimeout2)
            localStorage.setItem('newRegistrationDto', JSON.stringify(dto))
            saveIndicator.style.opacity = 1
            saveIndicator.style.display = 'block'
            saveIndicatorTimeout1 = setTimeout(() => saveIndicator && (saveIndicator.style.opacity = 0), 2000)
            saveIndicatorTimeout2 = setTimeout(() => saveIndicator && (saveIndicator.style.display = ''), 3000)
            clearTimeout(inputTimeout)
        }
    }

    function handleInput(): void {
        if (newRegistration) {
            clearTimeout(inputTimeout)
            inputTimeout = setTimeout(saveForm, 5000)
        }
        changed = true
    }

    onMount(() => {
        if (newRegistration) {
            dto = JSON.parse(localStorage.getItem('newRegistrationDto')) ?? new RegistrationDTO()
        }

        return () => clearTimeout(inputTimeout)
    })
</script>

<div class="form">
    <span class="saveIndicator" bind:this={saveIndicator}>Input saved.</span>
    <FormGroup>
        <Input
            type="text"
            name="firstName"
            label="First Name"
            bind:value={dto.firstName}
            on:input={handleInput}
            {disabled}
        />
        <Input
            type="text"
            name="lastName"
            label="Last Name"
            bind:value={dto.lastName}
            on:input={handleInput}
            {disabled}
        />
    </FormGroup>
    <FormGroup>
        <Input
            type="email"
            name="email"
            label="Email Address"
            bind:value={dto.email}
            on:input={handleInput}
            {disabled}
        />
        <Input
            type="date"
            name="dateOfBirth"
            label="Date of Birth"
            min="1987-09-09"
            max="2004-06-30"
            bind:value={dto.dateOfBirth}
            on:input={handleInput}
            {disabled}
        />
    </FormGroup>
    <FormGroup>
        <Select
            name="country"
            label="Country"
            bind:value={dto.country}
            on:input={handleInput}
            options={countries}
            {disabled}
        />
        {#if !newRegistration}
            <FileInput
                name="idCopy"
                label="Copy of ID document"
                maxSize={2097152}
                accept="image/*"
                bind:value={dto.idCopy.value}
                bind:files={dto.idCopy.files}
                on:input={handleInput}
                {disabled}
            />
        {/if}
    </FormGroup>
    <div class="checkboxes">
        <Checkbox
            name="agreeRegulations"
            label="I agree with the <a href='/files/fsc_regulations_EN_2022-02-24.pdf' target='_blank' class='link'>regulations</a> and the <a href='/privacy' target='_blank' class='link'>privacy policy</a>."
            required
            bind:checked={regulationsAccepted}
            disabled={disabled || !newRegistration}
        />
    </div>
</div>
<div class="buttons">
    <slot></slot>
</div>

<style lang="stylus">
    .form
        position relative
        background-color #fff
        border solid 1px var(--color-border)
        border-radius var(--border-radius)
        padding 30px 45px

        /*& > :global(*:not(:first-child))*/
        & > :global(:not(.saveIndicator + *))
            margin-top 15px

        .saveIndicator
            font-size 12px
            line-height 15px
            margin-top -15px
            display none
            color var(--color-light-gray)
            transition all 1s ease

        .checkboxes
            margin-top 15px

    .buttons
        margin 15px 0
        width 50%
        float right
        display grid
        grid-template-columns 1fr 1fr
        column-gap 15px

    @media screen and (max-width 525px)
        .form
            padding 30px

        .buttons
            width 100%
</style>