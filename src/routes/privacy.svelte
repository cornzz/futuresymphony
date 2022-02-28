<script lang="ts">
    import Tab from '../components/Tab.svelte'
    import { MetaTags } from 'svelte-meta-tags'
    import { _ } from 'svelte-i18n'
    import { showLanding, showBack } from '../helpers/stores'

    showLanding.set(false)
    showBack.set(true)
</script>

<MetaTags
    title={$_('privacy.meta.title')}
    description={$_('privacy.meta.description')}
/>

<Tab oversize>
    <h1 class="cover-heading">{$_('privacy.title')}</h1>

    <p>At Future Symphony Competition, accessible from https://futuresymphony.lt, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Future Symphony Competition and how we use it.</p>

    <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

    <h2 class="cover-subheading">General Data Protection Regulation (GDPR)</h2>
    <p>We are a Data Controller of your information.</p>

    <p>PI „Muzikinis pirštas“ legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:</p>
    <ul>
        <li>PI „Muzikinis pirštas“ needs to perform a contract with you</li>
        <li>You have given PI „Muzikinis pirštas“ permission to do so</li>
        <li>Processing your personal information is in PI „Muzikinis pirštas“ legitimate interests</li>
        <li>PI „Muzikinis pirštas“ needs to comply with the law</li>
    </ul>
    
    <p>PI „Muzikinis pirštas“ will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>

    <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.</p>
    <p>In certain circumstances, you have the following data protection rights:</p>
    <ul>
        <li>The right to access, update or to delete the information we have on you.</li>
        <li>The right of rectification.</li> 
        <li>The right to object.</li>
        <li>The right of restriction.</li>
        <li>The right to data portability</li>
        <li>The right to withdraw consent</li>
    </ul>

    <h2 class="cover-subheading">Log Files</h2>

    <p>Future Symphony Competition follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

    <h2 class="cover-subheading">Privacy Policies</h2>

    <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Future Symphony Competition.</p>

    <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Future Symphony Competition, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

    <p>Note that Future Symphony Competition has no access to or control over these cookies that are used by third-party advertisers.</p>

    <h2 class="cover-subheading">Third Party Privacy Policies</h2>

    <p>Future Symphony Competition's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

    <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>

    <h2 class="cover-subheading">Children's Information</h2>

    <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

    <p>Future Symphony Competition does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

    <h2 class="cover-subheading">Online Privacy Policy Only</h2>

    <p>Our Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Future Symphony Competition. This policy is not applicable to any information collected offline or via channels other than this website.</p>

    <h2 class="cover-subheading">Consent</h2>

    <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
</Tab>