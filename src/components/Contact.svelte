<script lang="ts">
    import { mail } from '../helpers'
</script>

<h1 class="cover-heading"><b>Contacts</b></h1>
<div style="line-height: 1.65;">
    <b>Event organizers:</b>
    <div style="padding: 0 0 5px 30px;">
        PI „Muzikinis pirštas“
    </div>
    <b>Project managers:</b>
    <div style="padding: 0 0 5px 30px;">
        Adomas Morkūnas-Budrys &ndash; <span on:click="{mail}" class="contactlink mail" data-user="adomas"></span><br>
        Danielius Tuita &ndash; <span on:click="{mail}" class="contactlink mail" data-user="danielius"></span><br>
        Jurgis Kubilius &ndash; <span on:click="{mail}" class="contactlink mail" data-user="jurgis"></span>
    </div>						
    <b>Orchestra manager:</b>
    <div style="padding: 0 0 5px 30px;">
        Džiugas Daugirda &ndash; <span on:click="{mail}" class="contactlink mail" data-user="dziugas"></span>
    </div>
    <b>E-mail:</b> 
    <div style="padding: 0 0 5px 30px;">
        <b><span on:click="{mail}" class="contactlink mail" data-user="info"></span></b>
    </div>
    <b>Facebook:</b>
    <div style="padding: 0 0 5px 30px;">
        <a href="https://www.facebook.com/Future-Symphony-Competition-1832551767045287/" class="link" target="_blank">Future Symphony Competition</a>
    </div>
    <b>Web design:</b>
    <div style="padding: 0 0 5px 30px;">
        Cornelius Kummer &ndash; <a href="https://corny.me" class="link" target="_blank">www.corny.me</a>
    </div>
</div> 

<style lang="stylus">
    .contactlink
        color inherit

        &:hover
            text-decoration underline
</style>

