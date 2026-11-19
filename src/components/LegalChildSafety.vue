<script setup lang="ts">
const appName = 'LinkLiv'
const operatorName = 'Wang Yuhan'
const lastUpdated = 'November 19, 2026'
const safetyEmail = 'wangyuhan200887@icloud.com'

const sections = [
  ['standard', 'Our zero-tolerance standard'],
  ['report', 'Report a concern'],
  ['response', 'How we respond'],
  ['law', 'Law and escalation'],
  ['contact', 'Child safety contact'],
]
</script>

<template>
  <main class="safety-page">
    <div class="legal-wrap">
      <header class="legal-hero">
        <nav class="brand-row" aria-label="Legal pages">
          <a class="brand" href="/">
            <span class="brand-mark" aria-hidden="true">L</span>
            <span>{{ appName }}</span>
          </a>
          <div class="legal-switcher">
            <a href="/privacy">Privacy</a>
            <a href="/users">Terms</a>
            <a class="is-active" href="/child-safety" aria-current="page">Safety</a>
          </div>
        </nav>

        <div class="hero-copy">
          <p class="eyebrow">
            CHILD SAFETY STANDARDS
          </p>
          <h1>Children's safety is non-negotiable.</h1>
          <p>
            LinkLiv has zero tolerance for child sexual abuse and exploitation, including
            child sexual abuse material.
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
            <dt>Audience</dt>
            <dd>Adults 18 and over</dd>
          </div>
        </dl>
      </header>

      <section class="safety-promise" aria-label="Child safety at a glance">
        <div class="promise-mark" aria-hidden="true">
          ✦
        </div>
        <div>
          <p class="eyebrow">
            OUR COMMITMENT
          </p>
          <h2>Protect children. Report concerns. Take action.</h2>
        </div>
        <p>
          This globally available standard explains how {{ appName }} prohibits child sexual
          abuse and exploitation (CSAE), addresses child sexual abuse material (CSAM), and
          provides a point of contact for child-safety concerns.
        </p>
      </section>

      <div class="legal-layout">
        <aside class="legal-aside">
          <p class="aside-label">
            ON THIS PAGE
          </p>
          <nav aria-label="Child Safety Standards contents">
            <a v-for="([id, label], index) in sections" :key="id" :href="`#${id}`">
              <span>0{{ index + 1 }}</span>{{ label }}
            </a>
          </nav>
          <a class="contact-card" :href="`mailto:${safetyEmail}`">
            <span>Child safety contact</span>
            <strong>{{ safetyEmail }}</strong>
          </a>
        </aside>

        <article class="legal-copy">
          <p class="lead">
            {{ operatorName }} operates {{ appName }}, an adults-only social app. These
            Child Safety Standards apply to everyone who uses LinkLiv, regardless of where
            they live or how they access the service.
          </p>

          <section id="standard">
            <p class="section-number">
              01
            </p>
            <h2>Our zero-tolerance standard</h2>
            <p>
              LinkLiv strictly prohibits child sexual abuse and exploitation (CSAE) and
              child sexual abuse material (CSAM). No one may create, upload, post, request,
              share, store, sell, promote, distribute, or otherwise facilitate such content
              or conduct through LinkLiv.
            </p>

            <div class="definition-grid">
              <div>
                <p class="eyebrow">
                  CSAE
                </p>
                <h3>Child sexual abuse and exploitation</h3>
                <p>
                  Conduct or content that sexually exploits, abuses, or endangers a child.
                  This includes grooming, sextortion, trafficking, and sexual exploitation
                  of a child.
                </p>
              </div>
              <div>
                <p class="eyebrow">
                  CSAM
                </p>
                <h3>Child sexual abuse material</h3>
                <p>
                  Any visual depiction, including photos, video, or computer-generated
                  imagery, of a minor engaged in sexually explicit conduct.
                </p>
              </div>
            </div>

            <p>Our prohibition includes, without limitation:</p>
            <ul>
              <li>grooming, sexual solicitation, or sexualized communication with or about a child;</li>
              <li>the creation, distribution, request, or exchange of CSAM;</li>
              <li>sextortion, sexual trafficking, or other exploitation of a child;</li>
              <li>the sexualization, objectification, or abuse of minors; and</li>
              <li>attempts to evade safeguards, moderation, or enforcement related to child safety.</li>
            </ul>
          </section>

          <section id="report">
            <p class="section-number">
              02
            </p>
            <h2>Report a concern</h2>
            <p>
              If you see content or behavior that may involve CSAE or CSAM, use the in-app
              <strong>Report</strong> tool where it is available. You may also contact the
              LinkLiv Child Safety Point of Contact at
              <a :href="`mailto:${safetyEmail}`">{{ safetyEmail }}</a>.
            </p>

            <div class="report-panel">
              <div>
                <span class="step-number">01</span>
                <h3>Report in the app</h3>
                <p>Choose the Report option on the relevant account or content and provide enough detail to identify the concern.</p>
              </div>
              <div>
                <span class="step-number">02</span>
                <h3>Do not redistribute material</h3>
                <p>Never download, forward, post, attach, or otherwise share suspected CSAM — including in a report.</p>
              </div>
              <div>
                <span class="step-number">03</span>
                <h3>Seek urgent help</h3>
                <p>If a child is in immediate danger, contact local emergency services or law enforcement right away.</p>
              </div>
            </div>
          </section>

          <section id="response">
            <p class="section-number">
              03
            </p>
            <h2>How we respond</h2>
            <p>
              When LinkLiv obtains actual knowledge of CSAM or credible CSAE, our published
              standard is to take appropriate action consistent with applicable law. That may
              include removing or disabling access to content, restricting or terminating
              accounts, preserving relevant information where permitted or required, and
              escalating the matter through the appropriate legal process.
            </p>
            <p>
              We may also act on other child-safety concerns or violations of our
              <a href="/users#community">Community Rules</a>. Blocking an account can help
              limit your interactions with that account, but it does not replace reporting a
              serious safety concern.
            </p>
          </section>

          <section id="law">
            <p class="section-number">
              04
            </p>
            <h2>Law and escalation</h2>
            <p>
              LinkLiv is committed to complying with applicable child-safety laws and
              regulations. We maintain a process to report confirmed CSAM to the National
              Center for Missing &amp; Exploited Children (NCMEC) or the relevant regional
              authority, where required by applicable law.
            </p>
            <div class="law-callout">
              <p class="eyebrow">
                IMPORTANT
              </p>
              <p>
                This page does not replace emergency services, law enforcement, or a local
                child-protection organization. If you think someone is in immediate danger,
                contact the appropriate local authority first.
              </p>
            </div>
          </section>

          <section id="contact">
            <p class="section-number">
              05
            </p>
            <h2>Child Safety Point of Contact</h2>
            <p>
              The LinkLiv Child Safety Point of Contact is available to receive child-safety
              concerns and potential notifications about CSAE or CSAM on LinkLiv.
            </p>
            <div class="contact-block">
              <p class="eyebrow">
                CHILD SAFETY CONTACT
              </p>
              <h3>{{ operatorName }}</h3>
              <p>
                <a :href="`mailto:${safetyEmail}`">{{ safetyEmail }}</a>
              </p>
              <p class="contact-note">
                For privacy questions, please see our <a href="/privacy">Privacy Policy</a>.
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

.safety-page {
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
.legal-hero::before { position: absolute; z-index: -1; inset: 0; background: linear-gradient(135deg, #301429 0%, #54304c 61%, #6a3a54 100%); content: ""; }
.brand-row { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.brand { display: inline-flex; align-items: center; gap: 9px; color: inherit; font-size: 16px; font-weight: 750; letter-spacing: -.03em; text-decoration: none; }
.brand-mark { display: grid; width: 27px; height: 27px; place-items: center; border: 1px solid currentColor; border-radius: 50%; font-family: Georgia, serif; font-size: 15px; font-weight: 500; }
.legal-switcher { display: flex; gap: 4px; padding: 4px; border: 1px solid rgb(255 255 255 / 22%); border-radius: 99px; background: rgb(0 0 0 / 10%); }
.legal-switcher a { padding: 7px 13px; border-radius: 99px; color: rgb(255 255 255 / 72%); font-size: 12px; font-weight: 700; text-decoration: none; transition: .2s ease; }
.legal-switcher a:hover, .legal-switcher .is-active { background: #fff9f3; color: var(--plum); }
.hero-copy { max-width: 790px; padding: 74px 0 50px; }
.eyebrow, .aside-label { margin: 0 0 12px; color: var(--coral); font-size: 10px; font-weight: 800; letter-spacing: .14em; line-height: 1.2; }
.hero-copy h1 { max-width: 760px; margin: 0; font-family: Georgia, "Times New Roman", serif; font-size: clamp(47px, 7vw, 74px); font-weight: 400; letter-spacing: -.075em; line-height: .95; }
.hero-copy > p:last-child { max-width: 560px; margin: 23px 0 0; color: rgb(255 249 243 / 74%); font-size: 16px; line-height: 1.65; }
.document-meta { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin: 0; padding: 22px 28px; border: 1px solid rgb(255 255 255 / 14%); border-radius: 4px 4px 0 0; background: rgb(255 255 255 / 7%); }
.document-meta div { min-width: 0; }
.document-meta dt { margin-bottom: 4px; color: rgb(255 249 243 / 55%); font-size: 10px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
.document-meta dd { margin: 0; font-size: 13px; font-weight: 650; }
.safety-promise { display: grid; grid-template-columns: auto minmax(0, 1fr) minmax(230px, .72fr); align-items: center; gap: 30px; padding: 37px 50px; border-bottom: 1px solid var(--line); background: #e6cfbc; color: var(--plum); }
.promise-mark { display: grid; width: 48px; height: 48px; place-items: center; border: 1px solid rgb(52 23 45 / 25%); border-radius: 50%; font-size: 20px; }
.safety-promise .eyebrow { margin-bottom: 7px; color: #8b634f; }
.safety-promise h2 { margin: 0; font-family: Georgia, serif; font-size: 23px; font-weight: 400; letter-spacing: -.03em; line-height: 1.15; }
.safety-promise > p { margin: 0; font-size: 13px; line-height: 1.65; }
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
.legal-copy ul { display: grid; gap: 10px; margin: 0; padding-left: 20px; }
.legal-copy li { padding-left: 4px; }
.legal-copy li::marker { color: #b86d56; }
.legal-copy strong { color: #3c3430; }
.legal-copy a { color: #752b54; font-weight: 700; text-decoration-color: #d09b83; text-underline-offset: 3px; }
.definition-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; margin: 28px 0 26px; border: 1px solid var(--line); background: var(--line); }
.definition-grid > div { padding: 23px 21px; background: var(--cream); }
.definition-grid .eyebrow { margin-bottom: 26px; color: #a66250; }
.definition-grid h3 { color: var(--plum); font-family: Georgia, serif; font-size: 20px; font-weight: 400; letter-spacing: -.025em; }
.definition-grid p:last-child { margin: 0; font-size: 12px; line-height: 1.65; }
.report-panel { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; margin-top: 28px; border: 1px solid var(--line); background: var(--line); }
.report-panel > div { min-width: 0; padding: 23px 19px; background: #f0eae1; }
.step-number { display: block; margin-bottom: 28px; color: #b86d56; font-size: 11px; font-weight: 800; }
.report-panel h3 { color: var(--plum); font-family: Georgia, serif; font-size: 18px; font-weight: 400; letter-spacing: -.02em; }
.report-panel p { margin: 0; font-size: 12px; line-height: 1.65; }
.law-callout { margin-top: 28px; padding: 23px 26px; border-left: 3px solid #bb7059; background: var(--cream); }
.law-callout .eyebrow { margin-bottom: 9px; color: #9a5747; }
.law-callout p:last-child { margin: 0; }
.contact-block { margin-top: 29px; padding: 29px; background: var(--plum); color: #fff9f3; }
.contact-block .eyebrow { margin-bottom: 8px; color: var(--coral); }
.contact-block h3 { color: #fff9f3; font-family: Georgia, serif; font-size: 25px; font-weight: 400; letter-spacing: -.03em; }
.contact-block p { margin: 0; color: rgb(255 249 243 / 75%); }
.contact-block p + p { margin-top: 8px; }
.contact-block a { color: #ffd0bc; }
.contact-block .contact-note { font-size: 12px; }
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
  .hero-copy h1 { font-size: 49px; }
  .document-meta { grid-template-columns: 1fr; gap: 14px; padding: 18px 20px; }
  .document-meta div { display: flex; justify-content: space-between; gap: 16px; }
  .document-meta dt { margin: 0; }
  .document-meta dd { text-align: right; }
  .safety-promise { grid-template-columns: auto 1fr; gap: 16px; padding: 28px 20px; }
  .safety-promise > p { grid-column: 1 / -1; }
  .legal-layout { display: block; padding: 48px 20px 62px; }
  .legal-aside { position: static; margin-bottom: 45px; }
  .legal-aside nav { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 11px 18px; }
  .contact-card { display: none; }
  .lead { margin-bottom: 49px; font-size: 23px; }
  .legal-copy section + section { margin-top: 50px; }
  .definition-grid, .report-panel { grid-template-columns: 1fr; }
  .definition-grid > div, .report-panel > div { padding: 20px; }
  .definition-grid .eyebrow, .step-number { margin-bottom: 17px; }
  .legal-footer { display: grid; grid-template-columns: 1fr auto; padding: 25px 20px 32px; }
  .legal-footer p { grid-column: 1 / -1; grid-row: 2; }
}

@media (max-width: 450px) {
  .brand-row { align-items: flex-start; }
  .legal-switcher { gap: 0; }
  .legal-switcher a { padding: 6px 8px; font-size: 11px; }
  .legal-aside nav { grid-template-columns: 1fr; }
}
</style>
