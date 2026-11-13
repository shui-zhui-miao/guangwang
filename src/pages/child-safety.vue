<template>
  <main class="page-shell">
    <article class="policy-card">
      <header class="hero">
        <p class="eyebrow">
          Modliv · Trust & Safety
        </p>
        <h1>Child Safety Standards</h1>
        <p class="updated">
          Last updated: November 13, 2026
        </p>
      </header>

      <section>
        <h2>Our commitment</h2>
        <p>
          Modliv is intended for users aged 18 and over. We are committed to
          maintaining a safe community and have zero tolerance for child sexual
          abuse and exploitation (CSAE) or child sexual abuse material (CSAM).
        </p>
      </section>

      <section>
        <h2>Prohibited conduct and content</h2>
        <p>Users must never create, upload, post, share, solicit, distribute, or promote:</p>
        <ul>
          <li>Any content depicting, facilitating, or promoting the sexual abuse or exploitation of a minor.</li>
          <li>Grooming, sexual solicitation, coercion, trafficking, or exploitation of a minor.</li>
          <li>Sexualized images, videos, messages, or other material involving a minor.</li>
          <li>Any attempt to use Modliv to contact a minor for sexual purposes.</li>
        </ul>
      </section>

      <section>
        <h2>Reporting concerns</h2>
        <p>
          Users can report content, accounts, or behavior that may violate these
          standards through the in-app Report feature. Reports may also be sent
          to our Child Safety Contact at
          <a href="mailto:zuijarfreeman@gmail.com">zuijarfreeman@gmail.com</a>.
        </p>
        <p>
          If a child may be in immediate danger, please contact local emergency
          services or law enforcement without delay.
        </p>
      </section>

      <section>
        <h2>Our response</h2>
        <p>
          When Modliv obtains actual knowledge of suspected CSAM or CSAE-related
          content or conduct, we take appropriate action under our policies and
          applicable law. This may include removing content, restricting or
          terminating accounts, preserving relevant information where legally
          required, and reporting confirmed CSAM to the appropriate authority.
        </p>
      </section>

      <section>
        <h2>Child Safety Contact</h2>
        <dl class="contact-list">
          <div>
            <dt>Contact</dt>
            <dd>Modliv Safety Team</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd><a href="mailto:zuijarfreeman@gmail.com">zuijarfreeman@gmail.com</a></dd>
          </div>
        </dl>
        <p>
          This contact can receive notifications from Google Play regarding
          child-safety concerns and coordinate Modliv's review and enforcement response.
        </p>
      </section>
    </article>
  </main>
</template>

<style scoped>
.page-shell {
  min-height: 100vh;
  box-sizing: border-box;
  padding: 48px 20px;
  background:
    radial-gradient(circle at top right, #e6efff 0, transparent 35%),
    #f7f8fb;
  color: #1b2330;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.policy-card {
  max-width: 800px;
  margin: 0 auto;
  padding: clamp(28px, 6vw, 64px);
  background: #fff;
  border: 1px solid #e4e8ef;
  border-radius: 20px;
  box-shadow: 0 16px 48px rgb(26 43 68 / 10%);
}

.hero {
  padding-bottom: 28px;
  margin-bottom: 30px;
  border-bottom: 1px solid #e4e8ef;
}

.eyebrow {
  margin: 0 0 12px;
  color: #4a56c8;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1,
h2 {
  color: #17213a;
}

h1 {
  margin: 0;
  font-size: clamp(32px, 6vw, 48px);
  line-height: 1.12;
  letter-spacing: -0.035em;
}

h2 {
  margin: 34px 0 12px;
  font-size: 22px;
  line-height: 1.3;
}

p,
li,
dd {
  font-size: 16px;
  line-height: 1.72;
}

p {
  margin: 0 0 14px;
}

ul {
  padding-left: 24px;
  margin: 0;
}

li + li {
  margin-top: 8px;
}

a {
  color: #3147c7;
  font-weight: 650;
  overflow-wrap: anywhere;
}

.updated {
  margin: 14px 0 0;
  color: #637086;
  font-size: 14px;
}

.contact-list {
  display: grid;
  gap: 12px;
  padding: 20px;
  margin: 0 0 16px;
  background: #f5f7ff;
  border-radius: 12px;
}

.contact-list div {
  display: grid;
  grid-template-columns: 86px 1fr;
  gap: 12px;
}

dt {
  color: #56637a;
  font-weight: 700;
}

dd {
  margin: 0;
}

@media (max-width: 480px) {
  .page-shell {
    padding: 20px 12px;
  }

  .policy-card {
    border-radius: 14px;
  }

  .contact-list div {
    grid-template-columns: 1fr;
    gap: 2px;
  }
}
</style>
