<script lang="ts">
    import Input from '../../components/forms/Input.svelte'
    import Checkbox from '../../components/forms/Checkbox.svelte'
    import Button from '../../components/forms/Button.svelte'
    import FormGroup from '../../components/forms/FormGroup.svelte'
    import { _ } from 'svelte-i18n'
    import { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import { createEventDispatcher, onMount } from 'svelte'

    export let disabled: boolean = false
    export let newRegistration: boolean = false
    export let dto: RegistrationDTO = new RegistrationDTO()

    const dispatch = createEventDispatcher()

    let regulationsAccepted: boolean = true
    let editing: boolean = false
    let inputTimeout = null
    let saveIndicator

    function submitForm() {
        let formValid = Array.from(document.querySelectorAll('input')).every(e => e.reportValidity())
        if (formValid) {
            dispatch('submit', { dto })
        }
    }

    function saveForm() {
        console.log('saving...')
        localStorage.setItem('newRegistrationDto', JSON.stringify(dto))
        saveIndicator.style.opacity = 1
        saveIndicator.style.display = 'block'
        setTimeout(() => saveIndicator.style.opacity = 0, 1000)
        setTimeout(() => saveIndicator.style.display = 'none', 3000)
    }

    function handleInput() {
        clearTimeout(inputTimeout)
        inputTimeout = setTimeout(saveForm, 5000)
    }

    onMount(() => {
        if (newRegistration) {
            document.querySelectorAll('input').forEach(e => e.addEventListener('input', handleInput))
        }
        dto = JSON.parse(localStorage.getItem('newRegistrationDto')) ?? new RegistrationDTO()
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
            {disabled}
        />
        <Input
            type="text"
            name="lastName"
            label="Last Name"
            bind:value={dto.lastName}
            {disabled}
        />
    </FormGroup>
    <FormGroup>
        <Input
            type="email"
            name="email"
            label="Email Address"
            bind:value={dto.email}
            {disabled}
        />
        <Input
            type="date"
            name="dateOfBirth"
            label="Date of Birth"
            min="1987-09-09"
            max="2004-06-30"
            bind:value={dto.dateOfBirth}
            {disabled}
        />
    </FormGroup>
    <div class="checkboxes">
        <Checkbox
            name="agreeRegulations"
            label="I agree with the <a href='/files/fsc_regulations_EN_2022-01-17.pdf' target='_blank' class='link'>regulations</a>."
            bind:checked={regulationsAccepted}
            {disabled}
        />
    </div>
</div>
<div class="buttons">
    <!-- <Button
        type="outline"
        on:click={() => {}}
    >
        Clear Form
    </Button> -->
    <div></div>
    <Button
        type="primary"
        disabled={!regulationsAccepted}
        on:click={() => {
            if (!newRegistration) {
                editing = !editing
            }
            if (!editing) {
                submitForm()
            }
        }}
    >
        {newRegistration ? 'Submit' : editing ? 'Save' : 'Edit'}
    </Button>
</div>

<style lang="stylus">
    .form
        position relative
        margin-top 15px
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
            transition all 2s ease

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