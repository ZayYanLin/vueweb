<script setup lang="ts">
import CodeEditor from './CodeEditor.vue'
import NotificationCard from './NotificationCard.vue'
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__content">
      <div class="hero__copy">
        <div class="platform-pill">Developer LEARNING PLATFORM</div>
        <p class="eyebrow">Dev ASSISTED ROADMAP</p>
        <h1 id="hero-title">
          <span>Powerful the</span>
          <span class="gradient-text">Future of Coding</span>
        </h1>
        <p class="hero__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa aliquam quae, cum fugiat deserunt ducimus ut voluptate dolorem quia.
        </p>
        <div class="hero__actions">
          <a class="button button--primary" href="#">
            Start Learning
            <span aria-hidden="true">-&gt;</span>
          </a>
          <a class="button button--secondary" href="#">
            Explore Courses
            <span class="play-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div class="hero__visual" aria-label="Developer roadmap code editor preview">
        <CodeEditor />
        <NotificationCard />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  min-height: 100vh;
  padding: 166px 24px 76px;
}

.hero__content {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 54px;
  align-items: center;
  width: min(1180px, 100%);
  min-height: calc(100vh - 242px);
  margin: 0 auto;
}

.hero__copy {
  max-width: 568px;
  animation: fade-up 640ms ease both;
}

.platform-pill {
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 18px;
  border: 1px solid rgba(34, 211, 238, 0.56);
  border-radius: 999px;
  background: var(--pill-bg);
  box-shadow: var(--pill-shadow);
  color: var(--accent-soft);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.7px;
}

.eyebrow {
  margin: 42px 0 15px;
  color: var(--accent-cyan);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 3.6px;
}

h1 {
  max-width: 640px;
  margin: 0;
  color: var(--text);
  font-size: 68px;
  font-weight: 900;
  line-height: 0.99;
  letter-spacing: 0;
}

h1 span {
  display: block;
}

.gradient-text {
  padding-bottom: 9px;
  background: linear-gradient(92deg, #15b8ff 2%, #22d3ee 42%, #7dd3fc 74%, #e0f2fe 100%);
  background-clip: text;
  color: transparent;
  -webkit-background-clip: text;
}

.hero__description {
  max-width: 530px;
  margin: 26px 0 0;
  color: var(--text-muted);
  font-size: 18px;
  font-weight: 450;
  line-height: 1.76;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 38px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  min-width: 166px;
  padding: 0 23px;
  border-radius: 14px;
  color: #f8fafc;
  font-size: 15px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease, color 280ms ease;
}

.button--primary {
  gap: 10px;
  background: linear-gradient(135deg, #08a9f5 0%, #0878f5 100%);
  box-shadow: var(--shadow-button);
}

.button--secondary {
  gap: 12px;
  border: 1px solid var(--border);
  background: var(--surface-muted);
  color: var(--text);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.button:hover,
.button:focus-visible {
  transform: translateY(-2px);
}

.button--primary:hover,
.button--primary:focus-visible {
  box-shadow: 0 22px 52px rgba(8, 169, 245, 0.44), inset 0 1px 0 rgba(255, 255, 255, 0.22);
}

.button--secondary:hover,
.button--secondary:focus-visible {
  border-color: rgba(34, 211, 238, 0.42);
  background: var(--surface-solid);
}

.play-icon {
  display: grid;
  width: 24px;
  height: 24px;
  place-items: center;
  border: 1px solid rgba(34, 211, 238, 0.4);
  border-radius: 50%;
  color: var(--accent-cyan);
}

.play-icon svg {
  width: 10px;
  height: 10px;
  fill: currentColor;
}

.hero__visual {
  position: relative;
  width: 100%;
  animation: editor-in 720ms 120ms ease both;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes editor-in {
  from {
    opacity: 0;
    transform: translateY(22px) scale(0.985);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 1200px) {
  .hero__content {
    grid-template-columns: minmax(0, 0.88fr) minmax(455px, 1.12fr);
    gap: 38px;
  }

  h1 {
    font-size: 60px;
  }
}

@media (max-width: 992px) {
  .hero {
    padding: 130px 18px 62px;
  }

  .hero__content {
    grid-template-columns: 1fr;
    gap: 54px;
    min-height: auto;
  }

  .hero__copy {
    max-width: 720px;
    margin: 0 auto;
    text-align: center;
  }

  .hero__description {
    margin-right: auto;
    margin-left: auto;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__visual {
    max-width: 680px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 118px;
  }

  .platform-pill {
    padding: 8px 14px;
    font-size: 10px;
  }

  .eyebrow {
    margin-top: 32px;
    font-size: 11px;
  }

  h1 {
    font-size: 50px;
  }

  .hero__description {
    font-size: 16px;
    line-height: 1.68;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 104px 12px 52px;
  }

  .hero__content {
    gap: 40px;
  }

  h1 {
    font-size: 42px;
    line-height: 1.04;
  }

  .hero__description {
    margin-top: 18px;
    font-size: 15px;
  }

  .hero__actions {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    width: min(100%, 320px);
    margin: 30px auto 0;
  }

  .button {
    width: 100%;
  }
}
</style>
