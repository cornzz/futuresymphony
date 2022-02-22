<script lang="ts">
    import Tab from '../../components/Tab.svelte'
    import Input from '../../components/forms/Input.svelte'
    import Button from '../../components/forms/Button.svelte'
    import FormGroup from '../../components/forms/FormGroup.svelte'
    import { MetaTags } from 'svelte-meta-tags'
    import { showLanding, showBack } from '../../helpers/stores'
    import { _ } from 'svelte-i18n';

    showLanding.set(false)
    showBack.set(false)
</script>

<MetaTags 
    title={$_('registration.meta.title')}
    description={$_('registration.meta.description')}
/>

<Tab>
    <h1 class="cover-heading"><b>{$_('registration.title')}</b></h1>
    <div class="wrapper">
        <form action="">
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
                    type="text"
                    name="email"
                    label="Email Address"
                />
                <Input
                    type="text"
                    name="dateOfBirth"
                    label="Date of Birth"
                />
            </FormGroup>
        </form>
        <div class="buttons">
            <Button type="primary">
                Submit
            </Button>
        </div>
    </div>
</Tab>

<style lang="stylus">
    .wrapper
        height 100%

    form
        background-color #fff
        border solid 1px var(--color-border)
        border-radius var(--border-radius)
        padding 30px 45px
    
    .buttons
        margin 15px 0
</style>