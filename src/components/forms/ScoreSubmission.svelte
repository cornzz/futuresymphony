<script lang="ts">
    import Input from "./Input.svelte"
    import FileInput from "./FileInput.svelte"
    import Instrumentation from "./Instrumentation.svelte"
    import Textarea from "./Textarea.svelte"
    import Checkbox from "./Checkbox.svelte"
    import type { RegistrationDTO } from "src/helpers/RegistrationDTO"
    import { _ } from 'svelte-i18n'
    
    export let dto: RegistrationDTO
    export let disabled: boolean
</script>

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
        bind:value={dto.pieceScore.value}
        bind:files={dto.pieceScore.files}
        on:input
        {disabled}
    />
    <FileInput
        name="pieceDemo"
        label={'registration.form.pieceDemo'}
        maxSize={31457280}
        type=".mp3"
        accept="audio/mpeg"
        bind:value={dto.pieceDemo.value}
        bind:files={dto.pieceDemo.files}
        on:input
        {disabled}
    />
</div>
<Instrumentation
    bind:selected={dto.instrumentation}
    on:input
    {disabled}
/>

<label
    for="scoreConfirmations"
    data-label='registration.scoreConfirmations.label'
    style="display: none"
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