<script lang="ts">
    import Button from "../forms/Button.svelte"
    import Input from "../forms/Input.svelte"
    import Textarea from "../forms/Textarea.svelte"

    export let show: boolean
</script>

<div class="mailer">
    <Input
        type="text"
        name="subject"
        label="Subject"
    />
    <Textarea
        name="message"
        label="Message"
        rows={10}
    />
</div>
<div class="buttons">
    <Button on:click={() => show = false}>Cancel</Button>
    <Button type="primary" on:click={() => {}}>Send</Button>
</div>

<style lang="stylus">
    .mailer
        width 85vw

    .buttons
        display flex
        flex-direction row
        justify-content end
        column-gap 15px

        &:global( > *)
            width 150px

</style>