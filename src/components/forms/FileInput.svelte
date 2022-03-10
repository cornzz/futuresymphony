<script lang="ts">
    import { _ } from "svelte-i18n"
    import { onMount } from "svelte"

    export let name: string
    export let label: string
    export let multiple: boolean = false
    export let maxSize: number
    export let type: string = ''
    export let accept: string
    export let value: string = ''
    export let files: FileList = undefined
    export let disabled: boolean = false

    let inputElement
    
    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    onMount(() => {
        inputElement.checkValidity = () => {
            return value !== '';
        }
    })
</script>


<label for={name} data-label={label}>
    {$_(label)} ({$_('registration.form.maxSize')} {formatBytes(maxSize)}{type ? `, ${type}` : ''})
    <div
        class="preview"
        data-button-text={$_('registration.form.upload')}
        data-file-text={value.split('\\').pop()}
        {disabled}
    >
        <input
            id={name}
            type="file"
            bind:this={inputElement}
            bind:value
            bind:files
            on:input
            {multiple}
            {accept}
            {disabled}
            required
        />
    </div>
</label>

<style lang="stylus">
    @require 'input.styl'

    label
        position relative
        z-index 0

    input
        opacity 0
        z-index -1
    
    /* TODO: Fix broken label clicking
    .preview[disabled="false"]:hover
        cursor pointer*/

    .preview
        position relative
        border solid 1px var(--color-border)
        border-radius var(--border-radius)
        overflow hidden
        background linear-gradient(to left, #fff, transparent 6%)

        &:before
        &:after
            position absolute
            font-size 14px
            top 5px
            height 30px
            line-height 30px

        &:before
            content attr(data-button-text)
            left 5px
            height 30px
            width 60px
            text-align center
            background-color var(--color-primary)
            border-radius var(--border-radius)
            transition all 0.05s ease
            color #fff
        
        &[disabled="false"]:hover:before
            background-color var(--color-primary-hover)
            cursor pointer

        &:after
            content attr(data-file-text)
            left 75px
            z-index -1
        
        &[disabled="true"]
            background-color var(--color-background)

            &:before
                background-color var(--color-light-gray)
</style>
