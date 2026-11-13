<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="home-page">
    <img class="hero-image" src="../assets/bg.png" alt="Tunx: Live Video, Chat Fun">
    <div class="home-footer">
      <a href="/child-safety">Child Safety Standards</a>
      <span aria-hidden="true">·</span>
      <a href="/privacy">Privacy Policy</a>
      <a href="mailto:wulijun2002120822@icloud.com">wulijun2002120822@icloud.com</a>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  position: relative;
  min-height: 100%;
}

.hero-image {
  display: block;
  width: 100%;
  min-height: 100%;
  object-fit: cover;
}

.home-footer {
  position: absolute;
  right: 20px;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 14px;
  padding: 12px 16px;
  border-radius: 10px;
  background: rgb(0 0 0 / 76%);
  color: #fff;
  font-size: 14px;
}

.home-footer a {
  color: #fff;
  font-weight: 700;
  text-decoration: none;
}

.home-footer a:hover,
.home-footer a:focus-visible {
  text-decoration: underline;
}

@media (max-width: 560px) {
  .home-footer {
    right: 12px;
    bottom: 12px;
    left: 12px;
    font-size: 12px;
  }
}
</style>
