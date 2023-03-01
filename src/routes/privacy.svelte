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
    <div style="line-height: 1.65">
        <h1 class="cover-heading">{$_('privacy.title')}</h1>

        <p>Future Symphony Competition takes your privacy seriously and is committed to protecting the personal information that you share with us. This Privacy Policy outlines our policies and practices regarding the collection, use, and disclosure of your personal information.</p>
        
        <h2 class="cover-subheading">Collection of Personal Information</h2>
        <p>We collect personal information from you when you register for the Future Symphony Competition. The personal information we collect includes your name, email address, and other information you provide to us. We collect this information solely for the purpose of organizing and administering the competition.</p>
        
        <h2 class="cover-subheading">Use of Personal Information</h2>
        <p>We use your personal information only for the purpose of organizing and administering the competition. We may contact you via email to provide you with important information about the competition, including updates, deadlines, and other details related to the competition.</p>
        
        <h2 class="cover-subheading">Disclosure of Personal Information</h2>
        <p>We do not disclose your personal information to third parties, except as required by law. We do not use any other service providers to help us organize and administer the competition.</p>
        
        <h2 class="cover-subheading">Log Files</h2>
        <p>Like many other websites, we may collect information in log files that your browser sends whenever you visit our website. This may include your IP address, browser type and version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, and other statistics. We use this information solely for the purpose of analyzing trends, administering the website, and tracking user movements on the website.</p>
        
        <h2 class="cover-subheading">Retention of Personal Information</h2>
        <p>We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including the administration of the competition. After the competition has ended, we will delete your personal information.</p>
        <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.</p>
        <p>In certain circumstances, you have the following data protection rights:</p>
        <ul>
            <li>Right to access personal data</li>
            <li>Right to rectify personal data</li>
            <li>Right to erasure (also known as the right to be forgotten)</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Right not to be subject to automated decision-making, including profiling</li>
            <li>Right to lodge a complaint with a supervisory authority</li>
        </ul>
        <p>Note that these rights are provided under the General Data Protection Regulation (GDPR) and may vary slightly depending on the specific country within the EEA.</p>
        
        <h2 class="cover-subheading">Security</h2>
        <p>We take reasonable steps to ensure that your personal information is stored and transmitted securely. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee the absolute security of your personal information.</p>
        
        <h2 class="cover-subheading">Consent</h2>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

        <h2 class="cover-subheading">Changes to this Privacy Policy</h2>
        <p>We reserve the right to modify or amend this Privacy Policy at any time. Any changes to this Privacy Policy will be posted on our website, and we encourage you to review this Privacy Policy periodically.</p>
        
        <h2 class="cover-subheading">Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at info@futuresymphony.lt.</p>

        <p>Last updated: March 1, 2023.</p>
    </div>
</Tab>