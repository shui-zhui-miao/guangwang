<script setup lang="ts">
const appName = 'LinkLiv'
const operatorName = 'Wang Yuhan'
const lastUpdated = 'November 19, 2026'
const privacyEmail = 'wangyuhan200887@icloud.com'

const sections = [
  ['information', 'Information we handle'],
  ['use', 'How we use it'],
  ['sharing', 'When information is shared'],
  ['choices', 'Your choices'],
  ['retention', 'Retention and security'],
  ['children', 'Age requirement'],
  ['changes', 'Changes and contact'],
]
</script>

<template>
  <main class="legal-page">
    <div class="legal-wrap">
      <header class="legal-hero">
        <nav class="brand-row" aria-label="Legal pages">
          <a class="brand" href="/">
            <span class="brand-mark" aria-hidden="true">L</span>
            <span>{{ appName }}</span>
          </a>
          <div class="legal-switcher">
            <a class="is-active" href="/privacy" aria-current="page">Privacy</a>
            <a href="/users">Terms</a>
            <a href="/child-safety">Safety</a>
          </div>
        </nav>

        <div class="hero-copy">
          <p class="eyebrow">
            YOUR PRIVACY, EXPLAINED
          </p>
          <h1>Privacy Policy</h1>
          <p>
            A clear account of the information {{ appName }} needs to work, how it is used,
            and the choices you have.
          </p>
        </div>

        <dl class="document-meta">
          <div>
            <dt>Applies to</dt>
            <dd>{{ appName }} mobile app</dd>
          </div>
          <div>
            <dt>Last updated</dt>
            <dd>{{ lastUpdated }}</dd>
          </div>
          <div>
            <dt>Age requirement</dt>
            <dd>18 years or older</dd>
          </div>
        </dl>
      </header>

      <section class="privacy-promise" aria-label="Privacy at a glance">
        <div class="promise-icon" aria-hidden="true">
          ↗
        </div>
        <div>
          <p class="eyebrow">
            AT A GLANCE
          </p>
          <h2>We only ask for information that helps LinkLiv run.</h2>
        </div>
        <p>
          You decide what to post, whom to message, and whether to enable optional
          device permissions. Public posts and messages sent to other people can be
          seen by their intended audience.
        </p>
      </section>

      <div class="legal-layout">
        <aside class="legal-aside">
          <p class="aside-label">
            IN THIS POLICY
          </p>
          <nav aria-label="Privacy policy contents">
            <a v-for="([id, label], index) in sections" :key="id" :href="`#${id}`">
              <span>0{{ index + 1 }}</span>{{ label }}
            </a>
          </nav>
          <a class="contact-card" :href="`mailto:${privacyEmail}`">
            <span>Privacy questions?</span>
            <strong>{{ privacyEmail }}</strong>
          </a>
        </aside>

        <article class="legal-copy">
          <p class="lead">
            {{ operatorName }} operates {{ appName }}. This Privacy Policy describes how
            we handle information when you use the app's account, profile, community,
            chat, AI, notification, and purchase features. It does not govern third-party
            sites or services that you open from the app.
          </p>

          <section id="information">
            <p class="section-number">
              01
            </p>
            <h2>Information we handle</h2>
            <p>We handle information in the following categories:</p>
            <div class="detail-list">
              <div>
                <h3>Account and profile</h3>
                <p>
                  Your email address, password, account identifier, display name,
                  avatar, profile bio, and account preferences. You may be able to use
                  parts of the app as a guest without an email address.
                </p>
              </div>
              <div>
                <h3>Content and connections</h3>
                <p>
                  Posts, photos, videos, comments, chat-room information, messages,
                  follows, blocks, likes, reports, and other content or interactions you
                  choose to create. People who can access that content may keep a copy.
                </p>
              </div>
              <div>
                <h3>Purchases</h3>
                <p>
                  Product identifiers, transaction or order identifiers, purchase tokens,
                  and purchase status needed to deliver in-app items and prevent fraud.
                  Apple or Google processes the payment method; we do not receive your
                  payment card or bank-account number.
                </p>
              </div>
              <div>
                <h3>Device and service data</h3>
                <p>
                  Device, app, and network identifiers; notification token; IP address;
                  language and device settings; request logs; diagnostic information; and
                  how you use app features. This includes information generated by
                  Firebase Analytics, Firebase Cloud Messaging, and Adjust when those
                  services are active in the app.
                </p>
              </div>
            </div>

            <div class="permission-panel">
              <div>
                <p class="eyebrow">
                  OPTIONAL DEVICE ACCESS
                </p>
                <h3>You remain in control of permissions.</h3>
              </div>
              <ul>
                <li><strong>Camera</strong> — take or upload profile and community media.</li>
                <li><strong>Microphone</strong> — record video with sound or use voice features.</li>
                <li><strong>Photos / media</strong> — select images or videos that you choose to share.</li>
                <li><strong>Notifications</strong> — receive service updates when you opt in.</li>
              </ul>
              <p>
                You can change a permission at any time in your device settings. Refusing
                one limits the related feature, not the rest of the app.
              </p>
            </div>
          </section>

          <section id="use">
            <p class="section-number">
              02
            </p>
            <h2>How we use it</h2>
            <p>We use the information above to:</p>
            <ul>
              <li>create and secure accounts, profiles, and app sessions;</li>
              <li>show community content, deliver messages, and enable follows and blocks;</li>
              <li>process and verify in-app purchases and deliver virtual items;</li>
              <li>respond to reports, apply our Community Rules, and protect users;</li>
              <li>send notifications when you have enabled them;</li>
              <li>measure, improve, and troubleshoot the performance of the app; and</li>
              <li>comply with legal obligations and enforce our Terms of Use.</li>
            </ul>

            <div class="callout">
              <h3>AI chat</h3>
              <p>
                When you use AI chat, the text you submit is sent to the AI service used
                by LinkLiv to generate a response. Your prompt and the reply are saved in
                the app's conversation data. Please do not enter passwords, payment
                details, or sensitive information that you would not want processed by an
                AI provider.
              </p>
            </div>
          </section>

          <section id="sharing">
            <p class="section-number">
              03
            </p>
            <h2>When information is shared</h2>
            <p>We share information only as needed for the purposes above:</p>
            <ul>
              <li>
                <strong>With other LinkLiv users.</strong> Profile details, posts,
                comments, chat-room content, and messages are available to the audience
                you select or the person you send them to.
              </li>
              <li>
                <strong>With service providers.</strong> Providers help us deliver hosting,
                push notifications, analytics, attribution, AI responses, and in-app
                purchases. They may process information solely to provide their service.
              </li>
              <li>
                <strong>For legal and safety reasons.</strong> We may preserve or disclose
                information where required by law, to investigate suspected misuse, or to
                protect the safety, rights, and property of users or others.
              </li>
              <li>
                <strong>During a business change.</strong> If LinkLiv is involved in a
                reorganization, sale, or transfer of assets, information may be transferred
                as part of that transaction, subject to applicable law.
              </li>
            </ul>
          </section>

          <section id="choices">
            <p class="section-number">
              04
            </p>
            <h2>Your choices</h2>
            <div class="choice-grid">
              <div>
                <span class="choice-index">A</span>
                <h3>Profile and content</h3>
                <p>Update your profile, manage posts, block accounts, or report content from within the app.</p>
              </div>
              <div>
                <span class="choice-index">B</span>
                <h3>Permissions and notifications</h3>
                <p>Turn camera, microphone, media, and notification access on or off in your device settings.</p>
              </div>
              <div>
                <span class="choice-index">C</span>
                <h3>Access, correction, or deletion</h3>
                <p>
                  You can delete your account in the app. To request access to, correction
                  of, or deletion of information held by us, email us from the address
                  connected to your account.
                </p>
              </div>
            </div>
            <p>
              Deleting an account removes the account from the app. It cannot remove
              information another user has copied, content that is already public, or data
              we must keep for legal, fraud-prevention, or security reasons. We will
              explain any applicable retention when responding to a request.
            </p>
          </section>

          <section id="retention">
            <p class="section-number">
              05
            </p>
            <h2>Retention and security</h2>
            <p>
              We retain information for as long as necessary to provide the service,
              resolve disputes, enforce agreements, maintain security, and meet legal
              obligations. The app also stores account and conversation data locally on
              your device so its features can function. Removing the app generally removes
              local app data, but it does not itself request deletion of data held by us or
              other users.
            </p>
            <p>
              We use reasonable technical and organizational measures designed to protect
              information. No method of storage or transmission is completely secure, so we
              cannot promise absolute security.
            </p>
          </section>

          <section id="children">
            <p class="section-number">
              06
            </p>
            <h2>Age requirement</h2>
            <p>
              LinkLiv is intended for adults aged 18 and older. Do not use the app if you
              are under 18. If you believe that a person under 18 has provided personal
              information to us, please contact us so we can review the report.
            </p>
          </section>

          <section id="changes">
            <p class="section-number">
              07
            </p>
            <h2>Changes and contact</h2>
            <p>
              We may update this policy as LinkLiv or applicable requirements change. We
              will post the revised policy here and update the “Last updated” date. Where
              required, we will provide additional notice or ask for your consent.
            </p>
            <div class="contact-block">
              <p class="eyebrow">
                PRIVACY CONTACT
              </p>
              <h3>Questions, requests, or concerns?</h3>
              <p>
                Contact {{ operatorName }} at
                <a :href="`mailto:${privacyEmail}`">{{ privacyEmail }}</a>.
              </p>
            </div>
          </section>
        </article>
      </div>

      <footer class="legal-footer">
        <a class="brand" href="/"><span class="brand-mark" aria-hidden="true">L</span>{{ appName }}</a>
        <p>© {{ new Date().getFullYear() }} {{ operatorName }}. All rights reserved.</p>
        <div>
          <a href="/privacy">Privacy</a>
          <a href="/users">Terms</a>
          <a href="/child-safety">Safety</a>
        </div>
      </footer>
    </div>
  </main>
</template>

<style scoped>
:global(*) { box-sizing: border-box; }
:global(html) { background: #f5f2ec; scroll-behavior: smooth; }
:global(body) { background: #f5f2ec; color: #25221f; }

.legal-page {
  --ink: #25221f;
  --muted: #746f67;
  --line: #d9d2c7;
  --paper: #f5f2ec;
  --plum: #34172d;
  --cream: #fffdf9;
  --coral: #ed9476;
  min-height: 100%;
  background: var(--paper);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.legal-wrap { width: min(1160px, calc(100% - 40px)); margin: 0 auto; }
.legal-hero { position: relative; isolation: isolate; padding: 26px 0 0; color: #fff9f3; }
.legal-hero::before { content: ""; position: absolute; inset: 0; z-index: -1; background: linear-gradient(135deg, #301429 0%, #54304c 61%, #6a3a54 100%); }
.brand-row { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.brand { display: inline-flex; align-items: center; gap: 9px; color: inherit; font-size: 16px; font-weight: 750; letter-spacing: -.03em; text-decoration: none; }
.brand-mark { display: grid; width: 27px; height: 27px; place-items: center; border: 1px solid currentColor; border-radius: 50%; font-family: Georgia, serif; font-size: 15px; font-weight: 500; }
.legal-switcher { display: flex; gap: 4px; padding: 4px; border: 1px solid rgb(255 255 255 / 22%); border-radius: 99px; background: rgb(0 0 0 / 10%); }
.legal-switcher a { padding: 7px 13px; border-radius: 99px; color: rgb(255 255 255 / 72%); font-size: 12px; font-weight: 700; text-decoration: none; transition: .2s ease; }
.legal-switcher a:hover, .legal-switcher .is-active { background: #fff9f3; color: var(--plum); }
.hero-copy { max-width: 680px; padding: 74px 0 50px; }
.eyebrow, .aside-label { margin: 0 0 12px; color: var(--coral); font-size: 10px; font-weight: 800; letter-spacing: .14em; line-height: 1.2; }
.hero-copy h1 { max-width: 640px; margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: clamp(48px, 7.4vw, 78px); font-weight: 400; letter-spacing: -.075em; line-height: .95; }
.hero-copy > p:last-child { max-width: 515px; margin: 23px 0 0; color: rgb(255 249 243 / 74%); font-size: 16px; line-height: 1.65; }
.document-meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin: 0; padding: 22px 28px; border: 1px solid rgb(255 255 255 / 14%); border-radius: 4px 4px 0 0; background: rgb(255 255 255 / 7%); }
.document-meta div { min-width: 0; }
.document-meta dt { margin-bottom: 4px; color: rgb(255 249 243 / 55%); font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
.document-meta dd { margin: 0; font-size: 13px; font-weight: 650; }
.privacy-promise { display: grid; grid-template-columns: auto minmax(0, 1fr) minmax(230px, .72fr); align-items: center; gap: 30px; padding: 37px 50px; border-bottom: 1px solid var(--line); background: #eb9577; color: var(--plum); }
.promise-icon { display: grid; width: 48px; height: 48px; place-items: center; border: 1px solid rgb(52 23 45 / 25%); border-radius: 50%; font-size: 25px; }
.privacy-promise .eyebrow { margin-bottom: 7px; color: rgb(52 23 45 / 70%); }
.privacy-promise h2 { margin: 0; font-family: Georgia, serif; font-size: 23px; font-weight: 400; letter-spacing: -.03em; line-height: 1.15; }
.privacy-promise > p { margin: 0; font-size: 13px; line-height: 1.65; }
.legal-layout { display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: clamp(44px, 8vw, 115px); padding: 74px 0 98px; }
.legal-aside { align-self: start; position: sticky; top: 24px; }
.legal-aside nav { display: grid; gap: 12px; padding-bottom: 28px; border-bottom: 1px solid var(--line); }
.legal-aside nav a { display: grid; grid-template-columns: 24px 1fr; gap: 10px; color: var(--muted); font-size: 12px; font-weight: 600; line-height: 1.35; text-decoration: none; }
.legal-aside nav a:hover { color: var(--plum); }
.legal-aside nav span { color: #a29a90; font-size: 10px; letter-spacing: .06em; }
.contact-card { display: grid; gap: 7px; margin-top: 25px; color: var(--ink); font-size: 11px; text-decoration: none; }
.contact-card span { color: var(--muted); }
.contact-card strong { color: var(--plum); font-size: 12px; overflow-wrap: anywhere; }
.legal-copy { max-width: 730px; min-width: 0; }
.lead { margin: -5px 0 66px; color: #3e3934; font-family: Georgia, serif; font-size: clamp(21px, 2.25vw, 27px); letter-spacing: -.025em; line-height: 1.45; }
.legal-copy section { scroll-margin-top: 28px; padding-top: 4px; }
.legal-copy section + section { margin-top: 66px; }
.section-number { margin: 0 0 13px; color: #ae6954; font-size: 11px; font-weight: 800; letter-spacing: .14em; }
.legal-copy h2 { margin: 0 0 17px; color: var(--plum); font-family: Georgia, "Times New Roman", serif; font-size: clamp(30px, 3.35vw, 42px); font-weight: 400; letter-spacing: -.055em; line-height: 1; }
.legal-copy h3 { margin: 0 0 7px; color: #2f2926; font-size: 14px; line-height: 1.35; }
.legal-copy p, .legal-copy li { color: #625c54; font-size: 14px; line-height: 1.75; }
.legal-copy p { margin: 0 0 17px; }
.legal-copy ul { display: grid; gap: 10px; margin: 0 0 18px; padding-left: 20px; }
.legal-copy li { padding-left: 4px; }
.legal-copy li::marker { color: #b86d56; }
.legal-copy strong { color: #3c3430; }
.legal-copy a { color: #752b54; font-weight: 700; text-decoration-color: #d09b83; text-underline-offset: 3px; }
.detail-list { display: grid; gap: 0; margin-top: 23px; border-top: 1px solid var(--line); }
.detail-list > div { display: grid; grid-template-columns: 172px 1fr; gap: 28px; padding: 22px 0; border-bottom: 1px solid var(--line); }
.detail-list p { margin: 0; }
.permission-panel { display: grid; grid-template-columns: minmax(180px, .8fr) minmax(250px, 1.2fr); gap: 22px 40px; margin-top: 32px; padding: 27px 29px 25px; border-radius: 4px; background: #ede6dc; }
.permission-panel .eyebrow { margin-bottom: 8px; color: #9a5747; }
.permission-panel h3 { color: var(--plum); font-family: Georgia, serif; font-size: 22px; font-weight: 400; letter-spacing: -.025em; }
.permission-panel ul { gap: 6px; margin: 0; padding-left: 17px; }
.permission-panel p:last-child { grid-column: 1 / -1; margin: 0; color: #756b60; font-size: 12px; line-height: 1.6; }
.callout { margin-top: 25px; padding: 23px 26px; border-left: 3px solid #bb7059; background: var(--cream); }
.callout h3 { color: var(--plum); font-family: Georgia, serif; font-size: 22px; font-weight: 400; }
.callout p { margin: 0; }
.choice-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; margin: 27px 0 23px; background: var(--line); border: 1px solid var(--line); }
.choice-grid > div { min-width: 0; padding: 22px 19px; background: var(--cream); }
.choice-index { display: block; margin-bottom: 27px; color: #b86d56; font-size: 11px; font-weight: 800; }
.choice-grid h3 { color: var(--plum); font-family: Georgia, serif; font-size: 18px; font-weight: 400; letter-spacing: -.02em; }
.choice-grid p { margin: 0; font-size: 12px; line-height: 1.65; }
.contact-block { margin-top: 29px; padding: 29px; background: var(--plum); color: #fff9f3; }
.contact-block .eyebrow { margin-bottom: 8px; color: var(--coral); }
.contact-block h3 { color: #fff9f3; font-family: Georgia, serif; font-size: 25px; font-weight: 400; letter-spacing: -.03em; }
.contact-block p { margin: 0; color: rgb(255 249 243 / 75%); }
.contact-block a { color: #ffd0bc; }
.legal-footer { display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 26px 0 38px; border-top: 1px solid var(--line); color: var(--muted); font-size: 11px; }
.legal-footer .brand { color: var(--plum); }
.legal-footer p { margin: 0; }
.legal-footer div { display: flex; gap: 15px; }
.legal-footer a:not(.brand) { color: inherit; text-decoration: none; }
.legal-footer a:not(.brand):hover { color: var(--plum); }

@media (max-width: 760px) {
  .legal-wrap { width: 100%; }
  .legal-hero { padding-top: 20px; }
  .brand-row, .hero-copy, .document-meta { margin-right: 20px; margin-left: 20px; }
  .hero-copy { padding: 56px 0 37px; }
  .hero-copy h1 { font-size: 51px; }
  .document-meta { grid-template-columns: 1fr; gap: 14px; padding: 18px 20px; }
  .document-meta div { display: flex; justify-content: space-between; gap: 16px; }
  .document-meta dt { margin: 0; }
  .document-meta dd { text-align: right; }
  .privacy-promise { grid-template-columns: auto 1fr; gap: 16px; padding: 28px 20px; }
  .privacy-promise > p { grid-column: 1 / -1; }
  .legal-layout { display: block; padding: 48px 20px 62px; }
  .legal-aside { position: static; margin-bottom: 45px; }
  .legal-aside nav { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 11px 18px; }
  .contact-card { display: none; }
  .lead { margin-bottom: 49px; font-size: 23px; }
  .legal-copy section + section { margin-top: 50px; }
  .detail-list > div { display: block; padding: 18px 0; }
  .detail-list h3 { margin-bottom: 6px; }
  .permission-panel { grid-template-columns: 1fr; gap: 18px; padding: 23px 20px; }
  .choice-grid { grid-template-columns: 1fr; }
  .choice-grid > div { padding: 20px; }
  .choice-index { margin-bottom: 17px; }
  .legal-footer { display: grid; grid-template-columns: 1fr auto; padding: 25px 20px 32px; }
  .legal-footer p { grid-column: 1 / -1; grid-row: 2; }
}

@media (max-width: 390px) {
  .brand-row { align-items: flex-start; }
  .legal-switcher a { padding: 6px 10px; }
  .legal-aside nav { grid-template-columns: 1fr; }
}
</style>
