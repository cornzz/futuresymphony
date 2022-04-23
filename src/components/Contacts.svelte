<script lang="ts">
    import { _ } from 'svelte-i18n';
    import { mail } from '../helpers'
</script>

<div class="content">
    <b>{$_('contacts.organizer')}:</b>
    <div style="padding: 0 0 5px 30px;">
        {$_('contacts.vsi')} „Muzikinis pirštas“
    </div>
    <b>{$_('contacts.email')}:</b> 
    <div style="padding: 0 0 5px 30px;">
        <b><span on:click="{mail}" class="contactlink mail" data-user="info"></span></b>
    </div>
    <b>{$_('contacts.projectManagement')}:</b>
    <div style="padding: 0 0 5px 30px;">
        Adomas Morkūnas-Budrys &ndash; <span on:click="{mail}" class="contactlink mail" data-user="adomas"></span><br>
        Danielius Tuita &ndash; <span on:click="{mail}" class="contactlink mail" data-user="danielius"></span><br>
        Jurgis Kubilius &ndash; <span on:click="{mail}" class="contactlink mail" data-user="jurgis"></span>
    </div>						
    <b>{$_('contacts.orchestraManagement')}:</b>
    <div style="padding: 0 0 5px 30px;">
        Džiugas Daugirda &ndash; <span on:click="{mail}" class="contactlink mail" data-user="dziugas"></span>
    </div>
    <b>{$_('contacts.communicationAssistance')}:</b>
    <div style="padding: 0 0 5px 30px;">
        Salomeja Petronyte &ndash; <span on:click="{mail}" class="contactlink mail" data-user="salomeja"></span>
    </div>
    <b>{$_('contacts.socialMedia')}:</b>
    <div style="padding: 0 0 5px 30px;">
        <a href="https://www.facebook.com/FScompetition" class="link" target="_blank">Facebook - Future Symphony Competition</a><br>
        <a href="https://www.youtube.com/channel/UCMQ-o5ylqM9DBZfNiD6bVGA/videos" class="link" target="_blank">YouTube - Future Symphony Competition</a>
    </div>
    <b>{$_('contacts.webdesign')}:</b>
    <div style="padding: 0 0 5px 30px;">
        Cornelius Kummer &ndash; <span on:click="{mail}" class="contactlink mail" data-user="cornelius"></span><br>
        <a href="https://corny.me" class="link" target="_blank">www.corny.me</a>
    </div>
</div> 

<style lang="stylus">
    .content
        line-height: 1.65
        flex-grow 1

        .contactlink
            color inherit

            &:hover
                text-decoration underline
</style>

