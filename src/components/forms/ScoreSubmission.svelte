<script lang="ts">
    import Input from "./Input.svelte"
    import FileInput from "./FileInput.svelte"
    import Instrumentation from "./Instrumentation.svelte"
    import Textarea from "./Textarea.svelte"
    import Checkbox from "./Checkbox.svelte"
    import type { RegistrationDTO } from "src/helpers/RegistrationDTO"
    import { createEventDispatcher, tick } from "svelte"
    import { _ } from 'svelte-i18n'
    
    export let dto: RegistrationDTO
    export let disabled: boolean

    const dispatch = createEventDispatcher()

    let clientHeight

    $: if (clientHeight) (async () => {
        await tick()
        dispatch('resize')
    })()
</script>

<div class="scoreSubmission" bind:clientHeight>
    <Input
        type="text"
        name="pieceTitle"
        label={'registration.form.pieceTitle'}
        bind:value={dto.pieceTitle}
        on:input
        {disabled}
    />
    <Textarea
        name="annotation"
        label={'registration.form.annotation'}
        maxlength={230}
        bind:value={dto.annotation}
        on:input
        {disabled}
    />
    <div class="form-row">
        <FileInput
            name="pieceScore"
            label={'registration.form.pieceScore'}
            maxSize={10485760}
            type=".pdf"
            accept="application/pdf"
            bind:value={dto.pieceScore}
            bind:files={dto.files.pieceScoreFile}
            on:input
            {disabled}
        />
        <FileInput
            name="pieceDemo"
            label={'registration.form.pieceDemo'}
            maxSize={31457280}
            type=".mp3"
            accept="audio/mpeg"
            bind:value={dto.pieceDemo}
            bind:files={dto.files.pieceDemoFile}
            on:input
            {disabled}
        />
    </div>
    <Instrumentation
        bind:selected={dto.instrumentation}
        on:input
        {disabled}
    />
    <Textarea
        name="remarks"
        label={'registration.form.remarks'}
        maxlength={300}
        bind:value={dto.remarks}
        on:input
        optional
        {disabled}
    />
    <label
        for="scoreConfirmations"
        data-label='registration.scoreConfirmations.label'
    >
    </label>
    <input
        id="scoreConfirmations"
        type="checkbox"
        checked={
            dto.scoreConfirmations[0] && 
            dto.scoreConfirmations[1] && 
            dto.scoreConfirmations[2]
        }
        style="display: none"
        required
    />
    <div class="checkboxes">
        <Checkbox
            name="scoreConfirmation1"
            label={$_('registration.scoreConfirmations.1')}
            bind:checked={dto.scoreConfirmations[0]}
            on:input
            {disabled}
        />
        <Checkbox
            name="scoreConfirmation2"
            label={$_('registration.scoreConfirmations.2')}
            bind:checked={dto.scoreConfirmations[1]}
            on:input
            {disabled}
        />
        <Checkbox
            name="scoreConfirmation3"
            label={$_('registration.scoreConfirmations.3')}
            bind:checked={dto.scoreConfirmations[2]}
            on:input
            {disabled}
        />
    </div>
</div>

<style lang="stylus">
    @require './form.styl'

    .scoreSubmission > :global(*)
        margin-bottom 15px

    .checkboxes > :global(*)
        margin-top 5px
</style>