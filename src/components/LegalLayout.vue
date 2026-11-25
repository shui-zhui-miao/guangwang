<script setup lang="ts">
defineProps<{
  title: string
  emphasis: string
  description: string
}>()
</script>

<template>
  <header class="site-header site-width">
    <SiteBrand />
    <RouterLink to="/" class="back-link">
      <span aria-hidden="true">←</span> Back to Vaim
    </RouterLink>
  </header>

  <main class="site-width legal" aria-labelledby="legal-title">
    <h1 id="legal-title" class="display">
      {{ title }} <em>{{ emphasis }}</em>
    </h1>
    <p class="legal-intro">
      {{ description }}
    </p>

    <nav class="legal-nav" aria-label="Legal pages">
      <RouterLink class="button button--outline" to="/privacy">
        Privacy Policy
      </RouterLink>
      <RouterLink class="button button--outline" to="/users">
        User Agreement
      </RouterLink>
      <a class="button button--outline" href="mailto:Vaim@vaim.site">Contact</a>
    </nav>

    <article class="legal-document">
      <slot />
    </article>
  </main>

  <SiteFooter />
</template>

<style scoped>
.legal {
  max-width: 900px;
  padding-block: clamp(44px, 8vw, 97px);
}

.legal-intro {
  max-width: 65ch;
  margin-top: 18px;
  font-size: 1.0625rem;
}

.legal-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-block: 27px;
}

.legal-nav .button {
  min-height: 40px;
  padding-inline: 15px;
}

.legal-nav .button[aria-current='page'] {
  border-color: var(--accent);
  color: var(--accent);
}

.legal-document {
  padding: clamp(20px, 5vw, 50px);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
  overflow-wrap: anywhere;
}

.legal-document :deep(section + section) {
  padding-top: 26px;
  margin-top: 26px;
  border-top: 1px solid var(--line);
}

.legal-document :deep(h2) {
  margin-bottom: 9px;
  font-size: clamp(1.1rem, 3vw, 1.35rem);
  font-weight: 750;
  line-height: 1.32;
}

.legal-document :deep(p),
.legal-document :deep(ul) {
  color: var(--muted);
  line-height: 1.75;
}

.legal-document :deep(p + p),
.legal-document :deep(ul) {
  margin-top: 0.75em;
}

.legal-document :deep(ul) {
  padding-inline-start: 1.45em;
  list-style: disc;
}

.legal-document :deep(li + li) {
  margin-top: 0.55em;
}

.legal-document :deep(a) {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 0.16em;
}
</style>
