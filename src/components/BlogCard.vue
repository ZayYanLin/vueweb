<script setup lang="ts">
import type { BlogPost } from '../data/blogs'

defineProps<{
  post: BlogPost
}>()
</script>

<template>
  <article class="blog-card">
    <div class="blog-card__media">
      <img :src="post.image" :alt="post.imageAlt" width="640" height="360" />
      <span class="date-badge">{{ post.dateLabel }}</span>
    </div>
    <div class="blog-card__body">
      <h2>{{ post.title }}</h2>
      <p class="read-time">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 1.5" />
        </svg>
        {{ post.readTime }}
      </p>
      <p class="blog-card__description">{{ post.description }}</p>
    </div>
  </article>
</template>

<style scoped>
.blog-card {
  display: grid;
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 24px;
  background: var(--surface-card);
  box-shadow: var(--shadow-card);
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.blog-card:hover {
  border-color: rgba(34, 211, 238, 0.35);
  transform: translateY(-4px);
}

.blog-card__media {
  position: relative;
}

.blog-card__media img {
  display: block;
  width: 100%;
  height: 188px;
  object-fit: cover;
}

.date-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 10px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--surface-card);
  backdrop-filter: blur(14px);
  color: var(--text);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.06em;
}

.blog-card__body {
  display: grid;
  gap: 10px;
  padding: 18px 18px 20px;
}

h2 {
  margin: 0;
  color: var(--text);
  font-size: 18px;
  font-weight: 800;
  line-height: 1.35;
}

.read-time {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  color: var(--accent-cyan);
  font-size: 13px;
  font-weight: 700;
}

.read-time svg {
  width: 14px;
  height: 14px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.blog-card__description {
  margin: 0;
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.65;
}

@media (max-width: 576px) {
  .blog-card {
    border-radius: 20px;
  }

  .blog-card__media img {
    height: 168px;
  }
}
</style>
