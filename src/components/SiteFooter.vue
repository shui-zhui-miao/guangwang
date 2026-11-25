<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-width site-footer">
    <SiteBrand />
    <nav aria-label="Footer">
      <RouterLink to="/privacy">
        Privacy Policy
      </RouterLink>
      <RouterLink to="/users">
        User Agreement
      </RouterLink>
      <a href="mailto:Vaim@vaim.site">Contact</a>
    </nav>
    <small>© {{ year }} Vaim</small>
  </footer>
</template>
