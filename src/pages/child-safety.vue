<script setup lang="ts">
const appName = 'Tunx: Live Video, Chat Fun'
const developerName = '360 OCTANE LLC'
const safetyEmail = 'wulijun2002120822@icloud.com'
</script>

<template>
  <div class="safety-page">
    <header class="site-header">
      <a class="brand" href="/" aria-label="Tunx home">Tunx</a>
      <span>Child Safety Standards</span>
    </header>

    <main class="content">
      <section class="hero" aria-labelledby="page-title">
        <p class="eyebrow">
          Safety &amp; Trust
        </p>
        <h1 id="page-title">
          Child Safety Standards
        </h1>
        <p class="lead">
          This policy applies to <strong>{{ appName }}</strong> ("Tunx"), operated by
          <strong>{{ developerName }}</strong>.
        </p>
        <p class="updated">
          Last updated: November 13, 2026
        </p>
      </section>

      <nav class="section-nav" aria-label="Child safety standards sections">
        <a href="#zero-tolerance">Zero tolerance</a>
        <a href="#reporting">Reporting &amp; enforcement</a>
        <a href="#contact">Safety contact</a>
      </nav>

      <section id="zero-tolerance" class="policy-section" aria-labelledby="zero-tolerance-title">
        <h2 id="zero-tolerance-title">
          Zero tolerance for CSAE and CSAM
        </h2>
        <p>
          Tunx and 360 OCTANE LLC have zero tolerance for child sexual abuse and
          exploitation (CSAE) and child sexual abuse material (CSAM). Using Tunx to
          create, upload, stream, share, solicit, store, promote, facilitate, or
          distribute CSAE or CSAM is strictly prohibited.
        </p>
        <p>Prohibited conduct includes, without limitation:</p>
        <ul>
          <li>Any sexual or sexually explicit content involving a minor.</li>
          <li>
            Grooming, sexual solicitation of a minor, sextortion, trafficking,
            exploitation, or attempts to exploit or endanger a child.
          </li>
          <li>
            Asking for, creating, sharing, or facilitating the exchange of sexual
            images or videos involving a minor.
          </li>
          <li>
            Using Tunx to arrange, promote, conceal, or otherwise support child
            sexual abuse or exploitation.
          </li>
          <li>Attempting to evade our safety controls or enforcement measures.</li>
        </ul>
      </section>

      <section id="reporting" class="policy-section" aria-labelledby="reporting-title">
        <h2 id="reporting-title">
          Reporting and enforcement
        </h2>
        <p>
          Users can report suspected CSAE, CSAM, or other child-safety concerns
          through the reporting or feedback tools available in Tunx, or by contacting
          our Child Safety Contact below. Do not send or attach suspected CSAM by
          email.
        </p>
        <p>
          When Tunx obtains actual knowledge of suspected CSAE or CSAM, 360 OCTANE
          LLC will review the report and take appropriate action consistent with this
          policy and applicable law. Action may include removing content, restricting
          access, suspending or permanently banning accounts, preserving relevant
          information where legally permitted, and reporting confirmed CSAM to the
          National Center for Missing &amp; Exploited Children (NCMEC) or the appropriate
          regional authority when required.
        </p>
      </section>

      <section class="policy-section" aria-labelledby="law-title">
        <h2 id="law-title">
          Legal compliance and emergencies
        </h2>
        <p>
          360 OCTANE LLC complies with applicable child-safety laws and cooperates
          with authorized law-enforcement requests as required by law. If a child may
          be in immediate danger, contact local emergency services or law enforcement
          immediately.
        </p>
      </section>

      <section id="contact" class="policy-section contact-card" aria-labelledby="contact-title">
        <h2 id="contact-title">
          Child Safety Point of Contact
        </h2>
        <p>
          360 OCTANE LLC's Child Safety Contact is authorized to receive and act on
          child-safety notifications, including notifications from Google Play, and to
          discuss our review and enforcement procedures.
        </p>
        <a class="contact-email" :href="`mailto:${safetyEmail}`">{{ safetyEmail }}</a>
      </section>
    </main>

    <footer class="site-footer">
      <span>© {{ developerName }}</span>
      <a href="/privacy">Privacy Policy</a>
    </footer>
  </div>
</template>

<style scoped>
.safety-page {
  min-height: 100%;
  background: #fff8fc;
  color: #2d1d29;
}

.site-header,
.content,
.site-footer {
  width: min(100% - 40px, 880px);
  margin: 0 auto;
}

.site-header {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  color: #735666;
  font-size: 0.9rem;
}

.brand {
  color: #7f1146;
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  text-decoration: none;
}

.content {
  padding-bottom: 64px;
}

.hero {
  padding: 52px clamp(24px, 7vw, 72px);
  border-radius: 24px;
  background: linear-gradient(135deg, #7f1146, #b32672 58%, #e45e9d);
  box-shadow: 0 18px 38px rgb(127 17 70 / 18%);
  color: #fff;
}

.eyebrow {
  margin: 0 0 10px;
  color: #a84b7d;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.hero .eyebrow {
  color: #ffd6ea;
}

h1,
h2,
h3 {
  color: #3f112a;
  line-height: 1.16;
}

h1 {
  margin: 0;
  color: #fff;
  font-size: clamp(2.15rem, 7vw, 3.65rem);
  letter-spacing: -0.045em;
}

h2 {
  margin: 0 0 18px;
  font-size: clamp(1.42rem, 3vw, 1.8rem);
  letter-spacing: -0.025em;
}

h3 {
  margin: 27px 0 10px;
  font-size: 1.05rem;
}

.lead {
  max-width: 610px;
  margin: 22px 0 0;
  font-size: 1.06rem;
  line-height: 1.7;
}

.updated {
  margin: 24px 0 0;
  color: #ffd6ea;
  font-size: 0.85rem;
}

.section-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  padding: 26px 0 4px;
}

.section-nav a {
  border: 1px solid #ecc7d9;
  border-radius: 999px;
  padding: 8px 12px;
  color: #7f1146;
  font-size: 0.86rem;
  font-weight: 700;
  text-decoration: none;
}

.section-nav a:hover,
.section-nav a:focus-visible {
  border-color: #7f1146;
  background: #fff;
}

.policy-section {
  margin-top: 24px;
  padding: clamp(24px, 5vw, 42px);
  border: 1px solid #f1dce7;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 8px 22px rgb(80 29 58 / 5%);
}

.policy-section p,
.policy-section li {
  color: #553f4d;
  font-size: 1rem;
  line-height: 1.75;
}

.policy-section p {
  margin: 0 0 16px;
}

.policy-section p:last-child {
  margin-bottom: 0;
}

ul {
  display: grid;
  gap: 11px;
  margin: 14px 0 0;
  padding-left: 1.3rem;
}

.contact-card {
  border-color: #dba9c5;
  background: #fff4f9;
}

.contact-email {
  display: inline-block;
  margin-top: 2px;
  color: #7f1146;
  font-weight: 800;
  overflow-wrap: anywhere;
}

.site-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  padding: 26px 0 36px;
  color: #806674;
  font-size: 0.84rem;
}

.site-footer a {
  color: #7f1146;
  font-weight: 700;
}

@media (max-width: 560px) {
  .site-header,
  .content,
  .site-footer {
    width: min(100% - 28px, 880px);
  }

  .site-header {
    min-height: 60px;
  }

  .site-header span {
    font-size: 0.8rem;
  }

  .hero {
    padding: 40px 24px;
    border-radius: 18px;
  }

  .policy-section {
    border-radius: 14px;
  }
}
</style>
