<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import Input from '../../components/forms/Input.svelte'
    import CheckInput from '../../components/forms/CheckInput.svelte'
    import Button from '../../components/forms/Button.svelte'
    import FormGroup from '../../components/forms/FormGroup.svelte'
    import { MetaTags } from 'svelte-meta-tags'
    import { showLanding, showBack } from '../../helpers/stores'
    import { _ } from 'svelte-i18n';

    showLanding.set(false)
    showBack.set(false)

    let registrationForm

    function submitForm() {

    }
</script>

<MetaTags 
    title={$_('registration.meta.title')}
    description={$_('registration.meta.description')}
/>

<Tab>
    <h1 class="cover-heading"><b>{$_('registration.title')}</b></h1>
    <div class="wrapper">
        <form bind:this={registrationForm} on:submit|preventDefault={submitForm}>
            <FormGroup>
                <Input
                    type="text"
                    name="firstName"
                    label="First Name"
                />
                <Input
                    type="text"
                    name="lastName"
                    label="Last Name"
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="email"
                    name="email"
                    label="Email Address"
                />
                <Input
                    type="date"
                    name="dateOfBirth"
                    label="Date of Birth"
                />
            </FormGroup>
            <div class="checkboxes">
                <CheckInput
                    type="checkbox"
                    name="agreeRegulations"
                    label="I agree with the regulations"
                />
            </div>
        </form>
        <div class="buttons">
            <Button
                type="outline"
                on:click={() => {}}
            >
                Clear Form
            </Button>
            <Button
                type="primary"
                on:click={() => {}}
            >
                Submit
            </Button>
        </div>
    </div>
</Tab>

<style lang="stylus">
    .wrapper
        height 100%

    form
        margin-top 15px
        background-color #fff
        border solid 1px var(--color-border)
        border-radius var(--border-radius)
        padding 30px 45px

    form > *
        margin-top 15px

    
    .buttons
        margin 15px 0
        width 50%
        float right
        display grid
        grid-template-columns 1fr 1fr
        column-gap 15px

    @media screen and (max-width 525px)
        .buttons
            width 100%
</style>