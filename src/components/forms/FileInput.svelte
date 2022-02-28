<script lang="ts">
    export let name: string
    export let label: string
    export let multiple: boolean = false
    export let accept: string
    export let value: string = ''
    export let files: FileList
    export let disabled: boolean = false
    
    let inputElement: HTMLInputElement
</script>


<label for={name}>
    {label}
    <div class="preview" data-button-text={'Upload'} data-file-text={value.split('\\').pop()} {disabled}>
        <input
            id={name}
            type="file"
            bind:value
            bind:files
            {multiple}
            {accept}
            {disabled}
            required
        />
    </div>
</label>

<style lang="stylus">
    @require 'input.styl'

    input
        opacity 0
        z-index -1
    
    .preview[disabled="false"]:hover
        cursor pointer

    .preview
        position relative
        border solid 1px var(--color-border)
        border-radius var(--border-radius)

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
            background-color var(--color-light-gray)
            padding 0 5px
            border-radius var(--border-radius)
            transition all 0.05s ease
            color #fff
        
        &[disabled="false"]:hover:before
            background-color var(--color-primary-hover)

        &:after
            content attr(data-file-text)
            left 75px
        
        &[disabled="true"]
            background-color var(--color-background)
</style>