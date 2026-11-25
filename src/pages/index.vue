<script setup lang="ts">
import { computed, ref } from 'vue'
import assistant from '../assets/vaim/assistant.webp'
import strength from '../assets/vaim/workout-strength.webp'
import stretch from '../assets/vaim/workout-stretch.webp'
import training from '../assets/vaim/workout-training.webp'
import video from '../assets/vaim/workout-video.webp'

const goals = [
  {
    name: 'Full body',
    title: 'Make it a full-body day.',
    description: 'Find routines that bring different muscle groups into one session, and see how other members put their workouts together.',
    image: training,
    alt: 'Vaim workout community training photo',
  },
  {
    name: 'Upper body',
    title: 'Build your upper-body routine.',
    description: 'Explore strength sessions and technique tips for training your arms, shoulders, chest, and back.',
    image: strength,
    alt: 'Vaim strength-training community photo',
  },
  {
    name: 'Lower body',
    title: 'Give leg day a place to start.',
    description: 'Find ideas for lower-body sessions and swap notes with people working toward similar goals.',
    image: stretch,
    alt: 'Vaim workout community gym photo',
  },
]

const selectedGoal = ref(0)
const goal = computed(() => goals[selectedGoal.value])
</script>

<template>
  <header class="site-header site-width">
    <SiteBrand />
    <nav aria-label="Main navigation">
      <a href="#workouts">Workouts</a>
      <a href="#community">Community</a>
      <a href="#assistant">Vaim AI</a>
    </nav>
    <a class="button button--outline header-contact" href="mailto:Vaim@vaim.site">
      Contact <span aria-hidden="true">↗</span>
    </a>
  </header>

  <main>
    <section class="site-width hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">
          The fitness community
        </p>
        <h1 id="hero-title" class="display">
          Find your <em>next move.</em>
        </h1>
        <p class="hero-description">
          Discover workout videos, share your progress, and get to know people who train like you.
        </p>
        <div class="hero-actions">
          <a class="button button--accent" href="#workouts">Explore workouts <span aria-hidden="true">↘</span></a>
          <a class="button button--outline" href="#assistant">Meet Vaim AI</a>
        </div>
      </div>

      <figure class="hero-art" role="img" aria-label="Vaim app previews showing a workout video and the fitness community feed">
        <div class="hero-orbit" aria-hidden="true" />
        <div class="phone phone--video" aria-hidden="true">
          <img :src="video" alt="" width="776" height="866" fetchpriority="high">
          <div class="phone-video-header">
            <span>‹</span> Workout video
          </div>
          <div class="phone-video-footer">
            <span class="phone-play">▶</span>
            <strong>Strength session</strong>
            <span>From the Vaim community</span>
          </div>
        </div>
        <div class="phone phone--feed" aria-hidden="true">
          <div class="phone-feed-heading">
            <span>9:41</span>
            <strong>Vaim</strong>
          </div>
          <div class="phone-feed-banner">
            <img :src="assistant" alt="" width="670" height="228">
            <span>AI fitness assistant <b>↗</b></span>
          </div>
          <p class="phone-feed-label">
            Workout feed
          </p>
          <div class="phone-feed-tiles">
            <img :src="stretch" alt="" width="328" height="366">
            <img :src="strength" alt="" width="328" height="366">
            <img :src="training" alt="" width="328" height="366">
          </div>
          <div class="phone-feed-nav">
            <b>⌂</b><span>▷</span><span>＋</span><span>◉</span>
          </div>
        </div>
      </figure>
    </section>

    <nav class="goal-strip" aria-label="Training goals">
      <ul class="site-width">
        <li v-for="(item, index) in goals" :key="item.name">
          <a href="#workouts" @click="selectedGoal = index">{{ item.name }}</a>
        </li>
      </ul>
    </nav>

    <section id="workouts" class="site-width site-section" aria-labelledby="workouts-title">
      <div class="section-heading">
        <h2 id="workouts-title" class="display">
          Train toward <em>your goals.</em>
        </h2>
        <p>Pick a training focus to see what you can explore in Vaim.</p>
      </div>
      <div class="goal-buttons" role="group" aria-label="Choose a training goal">
        <button
          v-for="(item, index) in goals"
          :key="item.name"
          type="button"
          class="button button--outline"
          :aria-pressed="selectedGoal === index"
          aria-controls="goal-preview"
          @click="selectedGoal = index"
        >
          {{ item.name }}
        </button>
      </div>
      <article id="goal-preview" class="workout-preview" aria-live="polite">
        <div class="workout-copy">
          <h3 class="display">
            {{ goal.title }}
          </h3>
          <p>{{ goal.description }}</p>
        </div>
        <img :src="goal.image" :alt="goal.alt" width="328" height="366" loading="lazy">
      </article>
    </section>

    <section id="community" class="community-section" aria-labelledby="community-title">
      <div class="site-section site-width">
        <div class="section-heading">
          <h2 id="community-title" class="display">
            Progress is better <em>shared.</em>
          </h2>
          <p>Find encouragement, exchange training ideas, and choose who you connect with.</p>
        </div>
        <div class="community-cards">
          <article>
            <h3>Post your progress</h3>
            <p>Share a workout update or short video. Ask a question and compare notes in the comments.</p>
          </article>
          <article>
            <h3>Find people to follow</h3>
            <p>Discover members and follow the people whose routines and training stories interest you.</p>
          </article>
          <article>
            <h3>Manage your interactions</h3>
            <p>Use reporting or blocking tools if a post or interaction crosses a line.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="assistant" class="site-section site-width assistant-section" aria-labelledby="assistant-title">
      <div class="assistant-art">
        <img :src="assistant" alt="Vaim’s fitness assistant mascot lifting a barbell" width="670" height="228" loading="lazy">
      </div>
      <div>
        <h2 id="assistant-title" class="display">
          Meet <em>Vaim AI.</em>
        </h2>
        <p>Get ideas for planning a session, choosing exercises, or varying your routine with Vaim’s fitness assistant.</p>
      </div>
    </section>

    <section class="site-width contact-section" aria-labelledby="contact-title">
      <div>
        <h2 id="contact-title" class="display">
          Questions about Vaim?
        </h2>
        <p>Reach the team for support, feedback, or account questions.</p>
      </div>
      <a class="button button--accent" href="mailto:Vaim@vaim.site">Email the team <span aria-hidden="true">↗</span></a>
    </section>
  </main>

  <SiteFooter />
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  align-items: center;
  min-height: 626px;
  padding-block: 58px 68px;
}

.hero-copy {
  position: relative;
  z-index: 1;
}

.hero h1 {
  margin-block: 23px;
  font-size: clamp(5.25rem, 8.2vw, 8.25rem);
  line-height: 0.88;
}

.hero h1 em {
  display: block;
  font-size: 0.76em;
  letter-spacing: -0.075em;
}

.hero-description {
  max-width: 31rem;
  font-size: clamp(1rem, 1.55vw, 1.2rem);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.hero-art {
  position: relative;
  isolation: isolate;
  aspect-ratio: 1.11;
  container-type: inline-size;
}

.hero-orbit {
  position: absolute;
  z-index: -1;
  inset: 4% 0 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: radial-gradient(ellipse at 58% 47%, #a43f20 0%, #562817 37%, transparent 71%);
}

.hero-orbit::after {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(#fbba8b17 1px, transparent 1px), linear-gradient(90deg, #fbba8b17 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(ellipse, #000 10%, transparent 73%);
  content: '';
}

.phone {
  position: absolute;
  width: 38%;
  aspect-ratio: 0.51;
  overflow: hidden;
  border: 1cqw solid #343029;
  border-radius: 5.2cqw;
  box-shadow: 0 20px 45px #050403a3;
  font-size: 1.85cqw;
}

.phone--video {
  top: 15%;
  left: 14%;
  color: #fffaf5;
  background: #171412;
  transform: rotate(-10deg);
}

.phone--video img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.phone--video::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(#130c0bb0, transparent 28%, transparent 51%, #120b0be8);
  content: '';
}

.phone-video-header,
.phone-video-footer {
  position: absolute;
  z-index: 1;
  right: 8%;
  left: 8%;
}

.phone-video-header {
  top: 7%;
  text-align: center;
  font-weight: 700;
}

.phone-video-header span {
  position: absolute;
  left: 0;
  font-size: 1.5em;
  line-height: 0.65;
}

.phone-video-footer {
  bottom: 7%;
  display: grid;
  gap: 0.3em;
}

.phone-video-footer strong {
  font-size: 1.35em;
}

.phone-play {
  display: grid;
  width: 2em;
  aspect-ratio: 1;
  place-items: center;
  margin-bottom: 0.2em;
  border-radius: 50%;
  color: #1b100b;
  background: var(--accent);
}

.phone--feed {
  top: 4%;
  right: 10%;
  padding: 5% 3.3% 0;
  background: #eee9e1;
  color: #201915;
  transform: rotate(10deg);
}

.phone-feed-heading {
  display: grid;
  gap: 0.35em;
  font-weight: 650;
}

.phone-feed-heading strong {
  color: #ba441a;
  font: 400 2.5em / 1 var(--font-display);
}

.phone-feed-banner {
  display: grid;
  margin-top: 0.65em;
  overflow: hidden;
  border-radius: 0.6em;
  background: #f9f7f2;
  font-weight: 750;
}

.phone-feed-banner span {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.54em;
}

.phone-feed-banner b {
  color: #b83c11;
}

.phone-feed-label {
  margin-block: 0.95em 0.4em;
  color: #201915;
  font-weight: 750;
}

.phone-feed-tiles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4em;
}

.phone-feed-tiles img {
  width: 100%;
  aspect-ratio: 0.94;
  border-radius: 0.55em;
  object-fit: cover;
}

.phone-feed-nav {
  position: absolute;
  inset: auto 8% 4%;
  display: flex;
  justify-content: space-around;
  border-radius: 3em;
  background: #fffaf2;
  font-size: 1.45em;
  font-weight: 650;
}

.phone-feed-nav b {
  color: #b44319;
}

.goal-strip {
  background: var(--accent);
  color: #20130e;
}

.goal-strip ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  font: 400 clamp(1rem, 2vw, 1.5rem) / 1 var(--font-display);
  letter-spacing: 0.075em;
}

.goal-strip li + li {
  border-left: 1px solid #26190f60;
}

.goal-strip a {
  display: block;
  padding-block: 15px;
}

.goal-strip a:hover,
.goal-strip a:focus-visible {
  background: #ffac7e;
}

.goal-strip a:focus-visible {
  outline: 2px solid #20130e;
  outline-offset: -4px;
}

.site-section {
  padding-block: clamp(65px, 8vw, 112px);
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 25px;
  margin-bottom: 26px;
}

.section-heading p {
  max-width: 29ch;
}

.goal-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}

.goal-buttons button {
  min-height: 42px;
}

.goal-buttons button[aria-pressed='true'] {
  border-color: var(--accent);
  background: var(--accent);
  color: #20120d;
}

.workout-preview {
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  min-height: 328px;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
}

.workout-copy {
  align-self: center;
  padding: clamp(24px, 6vw, 70px);
}

.workout-copy h3 {
  margin-bottom: 12px;
  font-size: clamp(2.2rem, 5vw, 4.5rem);
}

.workout-preview img {
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: cover;
  object-position: center 40%;
}

.community-section {
  border-block: 1px solid var(--line);
  background: #1e1916;
}

.community-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.community-cards article {
  padding: clamp(20px, 3vw, 32px);
  border-top: 2px solid var(--accent);
  border-radius: 3px 3px var(--radius) var(--radius);
  background: var(--surface);
}

.community-cards h3 {
  margin-bottom: 9px;
  font-weight: 750;
}

.assistant-section {
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  align-items: center;
  gap: clamp(24px, 7vw, 100px);
}

.assistant-art {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius);
}

.assistant-art img {
  width: 100%;
  min-height: 185px;
  object-fit: cover;
}

.assistant-section p,
.contact-section p {
  margin-top: 12px;
}

.contact-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-bottom: 46px;
  padding: clamp(24px, 5vw, 54px);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
}

.contact-section h2 {
  font-size: clamp(2.1rem, 4.6vw, 3.6rem);
}

@media (max-width: 850px) {
  .hero {
    min-height: 520px;
    padding-block: 45px;
  }

  .hero h1 {
    font-size: clamp(4.5rem, 10vw, 6rem);
  }

  .community-cards {
    gap: 10px;
  }
}

@media (max-width: 660px) {
  .hero,
  .workout-preview,
  .assistant-section {
    grid-template-columns: 1fr;
  }

  .hero {
    min-height: auto;
    padding-block: 46px 20px;
  }

  .hero h1 {
    font-size: clamp(4.15rem, 13.5vw, 5.8rem);
  }

  .hero-art {
    width: min(100%, 440px);
    margin: 22px auto 0;
  }

  .section-heading,
  .contact-section {
    flex-direction: column;
    align-items: start;
    gap: 12px;
  }

  .section-heading p {
    max-width: 42ch;
  }

  .community-cards {
    grid-template-columns: 1fr;
  }

  .workout-preview img {
    height: 250px;
  }
}
</style>
