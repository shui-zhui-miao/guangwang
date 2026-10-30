<script setup lang="ts">
defineOptions({ name: 'PrivacyPolicy' })

const appName = 'Lorn'
const operatorName = 'Wang Yuhan'
const effectiveDate = 'October 30, 2026'
const privacyEmail = 'wangyuhan200887@icloud.com'
</script>

<template>
  <main class="privacy-policy">
    <header>
      <h1>{{ appName }} Privacy Policy</h1>
      <p class="effective-date">Effective date: {{ effectiveDate }}</p>
      <p>
        {{ operatorName }} operates the {{ appName }} iOS app. In this policy,
        "we" and "us" refer to {{ operatorName }}. This policy describes how we
        handle information when you use accounts, profiles, community features,
        messages, AI chat, and in-app purchases. It applies to the app, not to
        independent websites or services that you may visit from it.
      </p>
    </header>

    <section aria-labelledby="information">
      <h2 id="information">1. Information We Handle</h2>
      <ul>
        <li>
          <strong>Account information:</strong> your email address and password
          when you register, sign in, or recover an account. You may also enter
          as a guest without providing an email address.
        </li>
        <li>
          <strong>Profile and community information:</strong> your display name,
          profile picture, bio, posts, photos, videos, comments, likes, follows,
          blocked accounts, and messages that you choose to create or share.
          Other users may see information you publish or send to them.
        </li>
        <li>
          <strong>Support and safety information:</strong> the report category and
          description that you submit when reporting content or an account.
        </li>
        <li>
          <strong>Purchase information:</strong> the Apple product identifier,
          transaction identifiers, purchase receipt, and account identifier
          needed to process an in-app purchase. Apple handles your payment
          method; the app does not ask for a bank account or card number.
        </li>
        <li>
          <strong>Technical information:</strong> when the app connects to our
          service, the service may receive ordinary request information such as
          your IP address, request time, and network diagnostics. The app also
          stores your consent choice and current account identifier on your
          device.
        </li>
      </ul>
      <p>
        The app stores copies of account, profile, post, and conversation data
        in its local storage so those features can work on your device. Content
        retrieved from our service may also be cached there. Removing the app
        normally removes its local app data, but does not by itself request
        deletion of information held by a service or by other users.
      </p>
    </section>

    <section aria-labelledby="permissions">
      <h2 id="permissions">2. Device Permissions</h2>
      <ul>
        <li>
          <strong>Camera:</strong> used when you choose to take a photo or record
          a video for your profile or community content.
        </li>
        <li>
          <strong>Microphone:</strong> used together with the camera when you
          choose to record a video with sound.
        </li>
        <li>
          <strong>Photos:</strong> used to select photos or videos and, when you
          grant photo-library access, to display images from your library in
          the app's picker. Some media actions may also modify or delete the
          selected item in your photo library after you confirm the action.
        </li>
      </ul>
      <p>
        You can change these permissions in iOS Settings. Denying a permission
        limits the corresponding feature, but does not prevent you from using
        unrelated parts of the app.
      </p>
    </section>

    <section aria-labelledby="purposes">
      <h2 id="purposes">3. How We Use Information</h2>
      <p>
        We use the information described above to provide account access,
        display profiles, community content, and messages, process
        purchases, respond to reports, maintain the service, and meet legal
        obligations.
      </p>
    </section>

    <section aria-labelledby="ai">
      <h2 id="ai">4. AI Chat</h2>
      <p>
        When you send a message to the AI chat, the app sends up to 4,000
        characters of your submitted text to Pollinations AI at text.pollinations.ai
        to generate a reply. The request currently places that text in the
        request URL. The provider and network infrastructure may process or
        log it under their own practices. Do not include passwords, payment
        details, or other information you do not want to send to this provider.
        Your AI conversation is also stored in the app's local conversation data.
      </p>
    </section>

    <section aria-labelledby="sharing">
      <h2 id="sharing">5. When Information Is Shared</h2>
      <ul>
        <li>
          <strong>Other users:</strong> content you publish, profile details
          you make visible, and messages you send are available to their
          intended audience. Recipients may keep their own copies.
        </li>
        <li>
          <strong>Service providers:</strong> our service receives information
          sent by the app for account access, content retrieval, reports, and
          purchase processing. Pollinations AI receives AI chat requests as
          described above. Apple processes in-app purchases.
        </li>
        <li>
          <strong>Legal requests:</strong> we may disclose information when
          required by applicable law or to protect users and the service.
        </li>
      </ul>
    </section>

    <section aria-labelledby="storage">
      <h2 id="storage">6. Storage, Retention, and Security</h2>
      <p>
        The app stores account and content data on your device and makes HTTPS
        requests to the services described above. Information held by our
        service is retained for as long as needed to provide the service,
        handle requests or disputes, and meet legal obligations. We cannot
        guarantee that messages or public content copied by other users can
        be removed from their devices. No method of storage or transmission
        can be guaranteed to be completely secure.
      </p>
    </section>

    <section aria-labelledby="choices">
      <h2 id="choices">7. Your Choices and Deletion</h2>
      <p>
        You can edit your profile in the app, control camera, microphone, and
        photo access in iOS Settings, and stop using AI chat at any time. The
        current in-app Delete account action removes the account record from
        the app's local account list. It does not by itself confirm deletion
        of information held by our service, information on another person's
        device, or every locally stored media file.
      </p>
      <p>
        To request access to, correction of, or deletion of information held
        by our service, contact us at
        <a :href="`mailto:${privacyEmail}`">{{ privacyEmail }}</a>. Include
        the email address associated with your account so we can identify the
        relevant record. We will handle requests subject to applicable law and
        explain when information must be retained.
      </p>
    </section>

    <section aria-labelledby="children">
      <h2 id="children">8. Children</h2>
      <p>
        {{ appName }} is intended for adults aged 18 or older. If you believe
        a person under 18 has provided personal information, contact us at
        <a :href="`mailto:${privacyEmail}`">{{ privacyEmail }}</a> so we can
        review the report.
      </p>
    </section>

    <section aria-labelledby="changes">
      <h2 id="changes">9. Changes to This Policy</h2>
      <p>
        We may update this policy when our practices change. We will publish
        the revised version with a new effective date and provide additional
        notice when required by law.
      </p>
    </section>

    <section aria-labelledby="contact">
      <h2 id="contact">10. Contact</h2>
      <p>
        The app is operated by {{ operatorName }}. For privacy questions or requests, email
        <a :href="`mailto:${privacyEmail}`">{{ privacyEmail }}</a>.
      </p>
    </section>
  </main>
</template>

<style scoped>
.privacy-policy {
  box-sizing: border-box;
  max-width: 760px;
  margin: 0 auto;
  padding: 24px 18px 48px;
  color: #2c3033;
  font: 14px/1.65 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-wrap: anywhere;
}

.privacy-policy h1,
.privacy-policy h2 {
  color: #22262a;
  line-height: 1.3;
}

.privacy-policy h1 {
  margin: 0 0 8px;
  font-size: 24px;
}

.privacy-policy h2 {
  margin: 28px 0 10px;
  font-size: 18px;
}

.privacy-policy p,
.privacy-policy ul {
  margin: 0 0 12px;
}

.privacy-policy ul {
  padding-left: 22px;
}

.privacy-policy li + li {
  margin-top: 8px;
}

.privacy-policy a {
  color: #7f1146;
  text-decoration: underline;
}

.effective-date {
  color: #666c71;
}
</style>
