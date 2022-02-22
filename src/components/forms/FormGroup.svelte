<script lang="ts">

</script>

<div>
    <slot></slot>
</div>

<style lang="stylus">
    div
        display grid
        margin-top 15px
        grid-template-columns 1fr 1fr
        column-gap 40px
        row-gap 15px

    @media screen and (max-width 525px)
        div
            grid-template-columns 1fr
</style>