<script lang="ts">
    import { _ } from 'svelte-i18n'

    export function mail(): void {
        window.location.href = `mailto:${this.dataset.user}@futuresymphony.lt`
    }
</script>

<div class="content">
    <b>{$_('contacts.organizer')}:</b>
    <div>
        {$_('contacts.vsi')} „Muzikinis pirštas“
    </div>
    <b>{$_('contacts.email')}:</b> 
    <div>
        <b><span on:click="{mail}" class="contactlink mail" data-user="info"></span></b>
    </div>
    <b>{$_('contacts.projectManagement')}:</b>
    <div>
        Adomas Morkūnas-Budrys &ndash;
        <span on:click="{mail}" class="contactlink mail" title={$_('contacts.sendEmail')} data-user="adomas"></span><br>
        Danielius Tuita &ndash;
        <span on:click="{mail}" class="contactlink mail" title={$_('contacts.sendEmail')}  data-user="danielius"></span><br>
        Jurgis Kubilius &ndash;
        <span on:click="{mail}" class="contactlink mail" title={$_('contacts.sendEmail')}  data-user="jurgis"></span>
    </div>						
    <b>{$_('contacts.orchestraManagement')}:</b>
    <div>
        Džiugas Daugirda &ndash;
        <span on:click="{mail}" title={$_('contacts.sendEmail')}  class="contactlink mail" data-user="dziugas"></span>
    </div>
    <b>{$_('contacts.communicationAssistance')}:</b>
    <div>
        Salomėja Petronytė &ndash;
        <span on:click="{mail}" title={$_('contacts.sendEmail')}  class="contactlink mail" data-user="salomeja"></span>
    </div>
    <b>{$_('contacts.socialMedia')}:</b>
    <div>
        <a href="https://www.facebook.com/FScompetition" class="link" target="_blank">Facebook - Future Symphony Competition</a><br>
        <a href="https://www.youtube.com/channel/UCMQ-o5ylqM9DBZfNiD6bVGA/videos" class="link" target="_blank">YouTube - Future Symphony Competition</a>
    </div>
    <b>{$_('contacts.webdesign')}:</b>
    <div>
        Cornelius Kummer &ndash;
        <span on:click="{mail}" title={$_('contacts.sendEmail')}  class="contactlink mail" data-user="cornelius"></span><br>
        <a href="https://corny.me" class="link" target="_blank">www.corny.me</a>
    </div>
</div> 

<style lang="stylus">
    .content
        line-height: 1.65
        flex-grow 1

        & > div
            padding: 0 0 5px 30px

            .contactlink
                color inherit

                &:hover
                    text-decoration underline
</style>

