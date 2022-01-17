<script lang="ts">
import { _ } from 'svelte-i18n';

    import { mail } from '../helpers'
</script>

<div class="content">
    <b>{$_('contacts.organizer')}:</b>
    <div style="padding: 0 0 5px 30px;">
        {$_('contacts.vsi')} „Muzikinis pirštas“
    </div>
    <b>{$_('contacts.projectManagers')}:</b>
    <div style="padding: 0 0 5px 30px;">
        Adomas Morkūnas-Budrys &ndash; <span on:click="{mail}" class="contactlink mail" data-user="adomas"></span><br>
        Danielius Tuita &ndash; <span on:click="{mail}" class="contactlink mail" data-user="danielius"></span><br>
        Jurgis Kubilius &ndash; <span on:click="{mail}" class="contactlink mail" data-user="jurgis"></span>
    </div>						
    <b>{$_('contacts.orchestraManager')}:</b>
    <div style="padding: 0 0 5px 30px;">
        Džiugas Daugirda &ndash; <span on:click="{mail}" class="contactlink mail" data-user="dziugas"></span>
    </div>
    <b>{$_('contacts.email')}:</b> 
    <div style="padding: 0 0 5px 30px;">
        <b><span on:click="{mail}" class="contactlink mail" data-user="info"></span></b>
    </div>
    <b>{$_('contacts.facebook')}:</b>
    <div style="padding: 0 0 5px 30px;">
        <a href="https://www.facebook.com/Future-Symphony-Competition-1832551767045287/" class="link" target="_blank">Future Symphony Competition</a>
    </div>
    <b>{$_('contacts.webdesign')}:</b>
    <div style="padding: 0 0 5px 30px;">
        Cornelius Kummer &ndash; <a href="https://corny.me" class="link" target="_blank">www.corny.me</a>
    </div>
</div> 

<style lang="stylus">
    .content
        line-height: 1.65
        height 100%

        .contactlink
            color inherit

            &:hover
                text-decoration underline
</style>

