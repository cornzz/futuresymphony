<script lang="ts">
    import Input from './Input.svelte'
    import Select from './Select.svelte'
    import FileInput from './FileInput.svelte'
    import Checkbox from './Checkbox.svelte'
    import ScoreSubmission from './ScoreSubmission.svelte'
    import Payment from './Payment.svelte'
    import { _ } from 'svelte-i18n'
    import { RegistrationDTO } from '../../helpers/RegistrationDTO'
    import { referrers, countries } from '../../helpers/selectData'
    import { onMount } from 'svelte'

    export let disabled: boolean = false
    export let newRegistration: boolean = false
    export let dto: RegistrationDTO
    export let regulationsAccepted: boolean = true
    export let changed: boolean = false

    let inputTimeout = null
    let saveIndicator: HTMLElement
    let saveIndicatorTimeout1 = null
    let saveIndicatorTimeout2 = null

    export function reportValidity(queryString?: string): boolean {
        let inputElements: Array<any> = Array.from(document.querySelectorAll(queryString ?? 'input:not([id=resendEmail]), select, textarea'))
        return inputElements.every(e => e.type === 'file' ? e.validateFiles() : e.reportValidity())
    }

    export function getInvalid(): (HTMLInputElement | HTMLSelectElement)[] {
        let inputElements: Array<HTMLInputElement | HTMLSelectElement> = Array.from(document.querySelectorAll('input, select, textarea'))
        return inputElements.filter(e => !e.checkValidity())
    }

    export function saveForm(): void {
        if (newRegistration) {
            clearTimeout(saveIndicatorTimeout1)
            clearTimeout(saveIndicatorTimeout2)
            localStorage.setItem('newRegistrationDto', JSON.stringify(dto))
            saveIndicator.style.opacity = '1'
            saveIndicator.style.display = 'block'
            saveIndicatorTimeout1 = setTimeout(() => saveIndicator && (saveIndicator.style.opacity = '0'), 2000)
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

    export function toggleSubsection(subsectionName: string, action?: 'open' | 'close'): void {
        const subsection = document.querySelector(subsectionName) as HTMLElement
        const subsectionTitle: HTMLElement = subsection.previousElementSibling as HTMLElement
        if (!subsectionTitle.classList.contains('active') && action !== 'close' || action === 'open') {
            subsection.style.height = (subsection.firstChild as HTMLElement).scrollHeight + 15 + 'px'
            subsection.classList.add('active')
            subsectionTitle.classList.add('active')
        } else if (subsectionTitle.classList.contains('active')) {
            subsection.style.height = '0px'
            subsection.classList.remove('active')
            subsectionTitle.classList.remove('active')
        }
    }

    export function closeSubsections(): void {
        toggleSubsection('#submissionSection', 'close')
        toggleSubsection('#paymentSection', 'close')
    }

    function resizeSubsection(subsection: string): void {
        if (document.querySelector(subsection).previousElementSibling.classList.contains('active')) {
            toggleSubsection(subsection, 'open')
        }
    }

    onMount(() => {
        if (newRegistration) {
            try {
                dto = JSON.parse(localStorage.getItem('newRegistrationDto')) ?? new RegistrationDTO()
            } catch (e) {}
        }

        return () => clearTimeout(inputTimeout)
    })
</script>

<div class="form">
    <span class="saveIndicator" bind:this={saveIndicator}>{$_('registration.form.inputSaved')}</span>
    <div class="form-row">
        <Input
            type="text"
            name="firstName"
            label={'registration.form.firstName'}
            bind:value={dto.firstName}
            on:input={handleInput}
            {disabled}
        />
        <Input
            type="text"
            name="lastName"
            label={'registration.form.lastName'}
            bind:value={dto.lastName}
            on:input={handleInput}
            {disabled}
        />
    </div>
    <div class="form-row">
        <Input
            type="email"
            name="email"
            label={'registration.form.email'}
            bind:value={dto.email}
            on:input={handleInput}
            disabled={disabled || !newRegistration}
        />
        <Input
            type="date"
            name="dateOfBirth"
            label={'registration.form.dateOfBirth'}
            min="1986-09-10"
            max="2004-06-30"
            bind:value={dto.dateOfBirth}
            on:input={handleInput}
            {disabled}
        />
    </div>
    <div class="form-row">
        <Select
            name="country"
            label={'registration.form.country'}
            bind:value={dto.country}
            on:input={handleInput}
            options={countries}
            {disabled}
        />
        {#if !newRegistration}
            <FileInput
                name="idCopy"
                label={'registration.form.idCopy'}
                maxSize={5242880}
                accept="image/*,application/pdf"
                bind:value={dto.idCopy}
                bind:files={dto.files.idCopyFile}
                on:input={handleInput}
                {disabled}
            />
        {/if}
    </div>
    {#if !newRegistration}
        <hr>
        <div class="subsection-title" on:click={() => toggleSubsection('#submissionSection')}>{$_('registration.form.scoreSubmission')}</div>
        <div class="subsection" id="submissionSection">
            <ScoreSubmission
                {dto}
                on:input={handleInput}
                on:resize={() => resizeSubsection('#submissionSection')}
                {disabled}
            />
        </div>
        <hr>
        <div class="subsection-title" on:click={() => toggleSubsection('#paymentSection')}>{$_('payment.title')}</div>
        <div class="subsection" id="paymentSection">
            <Payment
                {dto}
                on:input={handleInput}
                on:resize={() => resizeSubsection('#paymentSection')}
                {disabled}
            />
        </div>
        <hr>
        <div class="referrer">
            <Select
                name="referrer"
                label={'registration.form.referrer.title'}
                bind:value={dto.referrer}
                on:input={handleInput}
                options={referrers}
                otherOption="other"
                optional
                {disabled}
            />
        </div>
    {/if}
    <div class="checkbox">
        <Checkbox
            name="agreeRegulations"
            label={$_('registration.regulationsAccepted')}
            bind:checked={regulationsAccepted}
            disabled={disabled || !newRegistration}
            required
        />
    </div>
</div>
<div class="buttons">
    <slot></slot>
</div>

<style lang="stylus">
    @require './form.styl'

    .form
        position relative
        background-color #fff
        border solid 1px var(--color-border)
        border-radius var(--border-radius)
        padding 30px 45px
        font-size 16px

        .saveIndicator
            font-size 12px
            line-height 15px
            margin-top -15px
            display none
            color var(--color-light-gray)
            transition all 1s ease

        hr
            margin 0
        
        .subsection-title
            position relative
            padding 15px 0

            &:hover
                cursor pointer

            &:after
                content ''
                position absolute
                top 42%
                right 5px
                width 10px
                height 10px
                border-bottom solid 3px grey
                border-left solid 3px grey
                border-radius 1px
                transform translateY(-5px) rotate(-45deg)
                transition transform 0.2s ease

            &:global(.active:after)
                transform translateY(0px) rotate(135deg)
        
        .subsection
            height 0px
            margin 0 -3px
            padding 0 3px
            transition height 0.5s ease
            overflow hidden

            &:global( > div)
                transition opacity 0.5s ease-in
                opacity 0

            &:global(.active > div)
                transition opacity 0.3s ease
                opacity 1

        .checkbox
        .referrer
            margin-top 15px

    .buttons
        display grid
        grid-template-columns 1fr 1fr
        column-gap 15px
        margin 15px 0
        margin-left 50%

    @media screen and (max-width 525px)
        .form
            padding 20px
            font-size 14px

            .subsection-title
                font-size 1.2em

                &:after
                    top 47%
                    width 8px
                    height 8px
                    border-width 2px

        .buttons
            margin-left 0
</style>
