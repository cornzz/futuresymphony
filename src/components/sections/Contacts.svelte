<script lang="ts">
    import { _ } from 'svelte-i18n'

    export function mail(): void {
        window.location.href = `mailto:${this.dataset.user}@futuresymphony.lt`
    }
</script>

<div class="content">
    <b>{$_('contacts.organizer')}:</b>
    <div class="contacts">
        {$_('contacts.vsi')} „Muzikinis pirštas“
    </div>
    <b>{$_('contacts.email')}:</b> 
    <div class="contacts">
        <b><span on:click={mail} class="contactlink mail" data-user="info"></span></b>
    </div>
    <b>{$_('contacts.projectManagement')}:</b>
    <div class="contacts">
        Adomas Morkūnas-Budrys
        <!-- &ndash; <span on:click={mail} class="contactlink mail" title={$_('contacts.sendEmail')} data-user="adomas"></span> -->
        <br>
        Danielius Tuita
        <!-- &ndash; <span on:click={mail} class="contactlink mail" title={$_('contacts.sendEmail')}  data-user="danielius"></span> -->
        <!-- <br> -->
        <!-- Jurgis Kubilius -->
        <!-- &ndash; <span on:click={mail} class="contactlink mail" title={$_('contacts.sendEmail')}  data-user="jurgis"></span> -->
    </div>						
    <b>{$_('contacts.orchestraManagement')}:</b>
    <div class="contacts">
        Džiugas Daugirda
        <!-- &ndash; <span on:click={mail} title={$_('contacts.sendEmail')}  class="contactlink mail" data-user="dziugas"></span> -->
    </div>
    <b>{$_('contacts.communicationAssistance')}:</b>
    <div class="contacts">
        Salomėja Petronytė
        <!-- &ndash; <span on:click={mail} title={$_('contacts.sendEmail')}  class="contactlink mail" data-user="salomeja"></span> -->
    </div>
    <b>{$_('contacts.socialMedia')}:</b>
    <div class="contacts">
        <a href="https://www.facebook.com/FScompetition" class="link" target="_blank">Facebook - Future Symphony Competition</a><br>
        <a href="https://www.youtube.com/channel/UCMQ-o5ylqM9DBZfNiD6bVGA/videos" class="link" target="_blank">YouTube - Future Symphony Competition</a>
    </div>
    <b>{$_('contacts.webdesign')}:</b>
    <div class="contacts">
        Cornelius Kummer &ndash;
        <!-- <span on:click={mail} title={$_('contacts.sendEmail')}  class="contactlink mail" data-user="cornelius"></span><br> -->
        <a href="https://corny.me" class="link" target="_blank">www.corny.me</a>
    </div>
</div> 

<style lang="stylus">
    .content
        line-height: 1.65
        flex-grow 1

        .contacts
            position relative
            padding-left 30px
            margin 5px 0

            &:before
                content ''
                position absolute
                top 0
                left 14px
                height 100%
                width 2px
                padding 2px 0
                border-radius 3px
                background var(--color-primary)
                box-sizing border-box

            .contactlink
                color inherit

                &:hover
                    text-decoration underline
</style>

