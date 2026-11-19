<script setup lang="ts">
const appName = 'LinkLiv'
const operatorName = 'Wang Yuhan'
const lastUpdated = 'November 19, 2026'
const contactEmail = 'wangyuhan200887@icloud.com'

const sections = [
  ['agreement', 'Using LinkLiv'],
  ['account', 'Accounts and eligibility'],
  ['community', 'Community Rules'],
  ['content', 'Your content'],
  ['purchases', 'Purchases and coins'],
  ['services', 'AI and third-party services'],
  ['enforcement', 'Safety and enforcement'],
  ['legal', 'Legal terms and contact'],
]
</script>

<template>
  <main class="terms-page">
    <div class="legal-wrap">
      <header class="legal-hero">
        <nav class="brand-row" aria-label="Legal pages">
          <a class="brand" href="/">
            <span class="brand-mark" aria-hidden="true">L</span>
            <span>{{ appName }}</span>
          </a>
          <div class="legal-switcher">
            <a href="/privacy">Privacy</a>
            <a class="is-active" href="/users" aria-current="page">Terms</a>
            <a href="/child-safety">Safety</a>
          </div>
        </nav>

        <div class="hero-copy">
          <p class="eyebrow">
            THE RULES THAT KEEP LINKLIV WELCOMING
          </p>
          <h1>Terms of Use</h1>
          <p>
            These terms set out how to use LinkLiv safely, respectfully, and fairly.
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
            <dt>Minimum age</dt>
            <dd>18 years old</dd>
          </div>
        </dl>
      </header>

      <section class="terms-summary" aria-label="Terms at a glance">
        <div class="summary-mark" aria-hidden="true">
          ✦
        </div>
        <div>
          <p class="eyebrow">
            THE SHORT VERSION
          </p>
          <h2>Be real. Be respectful. Keep the community safe.</h2>
        </div>
        <p>
          LinkLiv is for adults. Don't post harmful content, don't misuse another
          person's information, and use the report and block tools whenever you need them.
        </p>
      </section>

      <div class="legal-layout">
        <aside class="legal-aside">
          <p class="aside-label">
            IN THESE TERMS
          </p>
          <nav aria-label="Terms of Use contents">
            <a v-for="([id, label], index) in sections" :key="id" :href="`#${id}`">
              <span>0{{ index + 1 }}</span>{{ label }}
            </a>
          </nav>
          <a class="contact-card" :href="`mailto:${contactEmail}`">
            <span>Need to reach us?</span>
            <strong>{{ contactEmail }}</strong>
          </a>
        </aside>

        <article class="legal-copy">
          <p class="lead">
            These Terms of Use are an agreement between you and {{ operatorName }}, the
            operator of {{ appName }}. Please read them before creating an account or using
            the app. They work alongside our <a href="/privacy">Privacy Policy</a>.
          </p>

          <section id="agreement">
            <p class="section-number">
              01
            </p>
            <h2>Using LinkLiv</h2>
            <p>
              By accessing or using LinkLiv, you agree to these Terms. If you do not agree,
              do not use the app. We may update these Terms when the app, our practices, or
              legal requirements change. The revised Terms will be posted here with an
              updated date; continuing to use LinkLiv after they take effect means you
              accept them to the extent permitted by law.
            </p>
          </section>

          <section id="account">
            <p class="section-number">
              02
            </p>
            <h2>Accounts and eligibility</h2>
            <div class="detail-list">
              <div>
                <h3>Adults only</h3>
                <p>
                  You must be at least 18 years old and legally able to enter into these
                  Terms. Do not use LinkLiv on behalf of a minor or allow a minor to use
                  your account.
                </p>
              </div>
              <div>
                <h3>Accurate, secure accounts</h3>
                <p>
                  Provide accurate account information and keep your password and device
                  secure. You are responsible for activity on your account. Tell us promptly
                  if you believe it has been accessed without your permission.
                </p>
              </div>
              <div>
                <h3>One person, one honest identity</h3>
                <p>
                  Do not impersonate another person, create accounts to evade enforcement,
                  or buy, sell, loan, transfer, or share accounts without our permission.
                </p>
              </div>
            </div>
          </section>

          <section id="community">
            <p class="section-number">
              03
            </p>
            <h2>Community Rules</h2>
            <p>
              You are responsible for what you post, upload, say, and do on LinkLiv. Do not
              use the app to create, share, solicit, promote, or facilitate content or
              conduct that is:
            </p>
            <div class="rule-list">
              <div><span>01</span><p>sexual or exploitative content involving minors, or any grooming or child-harm activity;</p></div>
              <div><span>02</span><p>non-consensual intimate imagery, sexual exploitation, or attempts to arrange commercial sexual services;</p></div>
              <div><span>03</span><p>violent threats, targeted harassment, bullying, hate, self-harm encouragement, or dangerous activity;</p></div>
              <div><span>04</span><p>fraudulent, deceptive, spam, phishing, or impersonation activity;</p></div>
              <div><span>05</span><p>an invasion of someone else's privacy, including personal data shared without permission;</p></div>
              <div><span>06</span><p>illegal, infringing, defamatory, or otherwise unlawful under applicable law;</p></div>
              <div><span>07</span><p>an attempt to interfere with the app, bypass safeguards, scrape data, reverse engineer, or distribute unauthorized tools; or</p></div>
              <div><span>08</span><p>content that otherwise creates a credible safety risk or prevents others from using LinkLiv comfortably.</p></div>
            </div>
            <p>
              You must have the rights and permissions needed for every photo, video, name,
              music, or other material you share. These rules are not an exhaustive list;
              we may act on other harmful or unlawful behavior.
            </p>
          </section>

          <section id="content">
            <p class="section-number">
              04
            </p>
            <h2>Your content</h2>
            <p>
              You keep ownership of content you create. To operate and improve LinkLiv, you
              grant us a non-exclusive, worldwide, royalty-free, transferable, and
              sublicensable license to host, store, reproduce, format, display, distribute,
              and make your content available through the service. This license lasts only
              for as long as your content is available on the service, subject to reasonable
              backup, safety, and legal-retention periods.
            </p>
            <p>
              You understand that other users may see, copy, save, or reshare content you
              make visible to them. We cannot control what others do with content after they
              receive it. Do not post anything you would not want an intended audience to
              see.
            </p>
          </section>

          <section id="purchases">
            <p class="section-number">
              05
            </p>
            <h2>Purchases and coins</h2>
            <div class="purchase-card">
              <div>
                <p class="eyebrow">
                  PLEASE NOTE
                </p>
                <h3>Digital items are sold through your app store.</h3>
              </div>
              <p>
                LinkLiv may offer coins or other virtual items. Pricing and item details are
                shown before you purchase. Payment is processed by the store connected to
                your device, and its terms and refund policies apply.
              </p>
            </div>
            <ul>
              <li>Coins and virtual items are licensed for use in LinkLiv; they are not money, property, or a bank account.</li>
              <li>They are not transferable, redeemable for cash, or exchangeable outside of LinkLiv.</li>
              <li>They do not expire while your account remains active and the service is available.</li>
              <li>Where a refund is required by law or granted under the applicable store policy, we will honor that process.</li>
            </ul>
          </section>

          <section id="services">
            <p class="section-number">
              06
            </p>
            <h2>AI and third-party services</h2>
            <p>
              LinkLiv may use third-party services to provide features such as AI chat,
              analytics, notifications, attribution, and payments. Their services may have
              separate terms and privacy practices. AI responses are generated
              automatically and may be incomplete, inaccurate, or inappropriate. They are
              not professional advice, and you should not rely on them for medical, legal,
              financial, or safety decisions.
            </p>
          </section>

          <section id="enforcement">
            <p class="section-number">
              07
            </p>
            <h2>Safety and enforcement</h2>
            <p>
              LinkLiv provides tools to report content and block accounts. We may review
              reports and take action, including removing content, limiting feature access,
              suspending or terminating an account, or working with law enforcement when
              appropriate. We may also act when we reasonably believe that someone has
              violated these Terms or created a safety, security, or legal risk.
            </p>
            <p>
              We work to keep the community safe, but cannot guarantee that every person or
              piece of content is safe, accurate, or appropriate. Use your judgment when
              interacting with others and never share information that could put you at risk.
            </p>
          </section>

          <section id="legal">
            <p class="section-number">
              08
            </p>
            <h2>Legal terms and contact</h2>
            <p>
              LinkLiv and its design, software, and branding are protected by applicable
              intellectual-property laws. Except for the rights these Terms give you, we
              retain all rights in the service. The app is provided on an “as is” and “as
              available” basis to the maximum extent permitted by law. Nothing in these
              Terms limits rights that cannot legally be limited.
            </p>
            <p>
              If a provision of these Terms is unenforceable, the remaining provisions will
              continue to apply. These Terms are governed by the laws that apply where you
              live and where the service is offered, except where local law requires a
              different result.
            </p>
            <div class="contact-block">
              <p class="eyebrow">
                CONTACT LINKLIV
              </p>
              <h3>Questions about these Terms?</h3>
              <p>
                Contact {{ operatorName }} at
                <a :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>.
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

.terms-page {
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
.terms-summary { display: grid; grid-template-columns: auto minmax(0, 1fr) minmax(230px, .72fr); align-items: center; gap: 30px; padding: 37px 50px; border-bottom: 1px solid var(--line); background: #e9ddc8; color: var(--plum); }
.summary-mark { display: grid; width: 48px; height: 48px; place-items: center; border: 1px solid rgb(52 23 45 / 25%); border-radius: 50%; font-size: 20px; }
.terms-summary .eyebrow { margin-bottom: 7px; color: #8b634f; }
.terms-summary h2 { margin: 0; font-family: Georgia, serif; font-size: 23px; font-weight: 400; letter-spacing: -.03em; line-height: 1.15; }
.terms-summary > p { margin: 0; font-size: 13px; line-height: 1.65; }
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
.rule-list { display: grid; gap: 0; margin: 27px 0 22px; border-top: 1px solid var(--line); }
.rule-list > div { display: grid; grid-template-columns: 52px 1fr; gap: 16px; padding: 16px 0; border-bottom: 1px solid var(--line); }
.rule-list span { color: #b86d56; font-size: 10px; font-weight: 800; letter-spacing: .08em; }
.rule-list p { margin: 0; }
.purchase-card { display: grid; grid-template-columns: minmax(180px, .8fr) minmax(250px, 1.2fr); gap: 32px; margin-bottom: 23px; padding: 27px 29px; border-radius: 4px; background: #ede6dc; }
.purchase-card .eyebrow { margin-bottom: 8px; color: #9a5747; }
.purchase-card h3 { color: var(--plum); font-family: Georgia, serif; font-size: 22px; font-weight: 400; letter-spacing: -.025em; }
.purchase-card > p { margin: 0; }
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
  .terms-summary { grid-template-columns: auto 1fr; gap: 16px; padding: 28px 20px; }
  .terms-summary > p { grid-column: 1 / -1; }
  .legal-layout { display: block; padding: 48px 20px 62px; }
  .legal-aside { position: static; margin-bottom: 45px; }
  .legal-aside nav { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 11px 18px; }
  .contact-card { display: none; }
  .lead { margin-bottom: 49px; font-size: 23px; }
  .legal-copy section + section { margin-top: 50px; }
  .detail-list > div { display: block; padding: 18px 0; }
  .detail-list h3 { margin-bottom: 6px; }
  .purchase-card { grid-template-columns: 1fr; gap: 18px; padding: 23px 20px; }
  .rule-list > div { grid-template-columns: 35px 1fr; gap: 10px; }
  .legal-footer { display: grid; grid-template-columns: 1fr auto; padding: 25px 20px 32px; }
  .legal-footer p { grid-column: 1 / -1; grid-row: 2; }
}

@media (max-width: 390px) {
  .brand-row { align-items: flex-start; }
  .legal-switcher a { padding: 6px 10px; }
  .legal-aside nav { grid-template-columns: 1fr; }
}
</style>
