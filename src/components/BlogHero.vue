<script setup lang="ts">
import type { BlogPost } from '../data/blogs'

defineProps<{
  post: BlogPost
}>()
</script>

<template>
  <article class="blog-hero" :aria-labelledby="`hero-title-${post.id}`">
    <div class="blog-hero__media">
      <img :src="post.image" :alt="post.imageAlt" width="1180" height="520" />
      <span class="date-badge">{{ post.dateLabel }}</span>
    </div>

    <div class="blog-hero__copy">
      <h1 :id="`hero-title-${post.id}`">{{ post.title }}</h1>
      <p class="read-time">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 1.5" />
        </svg>
        {{ post.readTime }}
      </p>
      <p class="blog-hero__description">{{ post.description }}</p>
    </div>
  </article>
</template>

<style scoped>
.blog-hero {
  display: grid;
  gap: 28px;
}

.blog-hero__media {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 32px;
  background: var(--surface-card);
  box-shadow: var(--shadow-editor);
}

.blog-hero__media img {
  display: block;
  width: 100%;
  height: min(52vh, 520px);
  object-fit: cover;
}

.date-badge {
  position: absolute;
  top: 22px;
  left: 22px;
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 14px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface-card);
  backdrop-filter: blur(16px);
  color: var(--text);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.blog-hero__copy {
  max-width: 820px;
}

h1 {
  margin: 0;
  color: var(--text);
  font-size: 42px;
  font-weight: 900;
  line-height: 1.12;
}

.read-time {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0 0;
  color: var(--accent-cyan);
  font-size: 14px;
  font-weight: 700;
}

.read-time svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}

.blog-hero__description {
  margin: 16px 0 0;
  color: var(--text-muted);
  font-size: 17px;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .blog-hero__media {
    border-radius: 24px;
  }

  .blog-hero__media img {
    height: min(42vh, 360px);
  }

  h1 {
    font-size: 30px;
  }

  .blog-hero__description {
    font-size: 15px;
  }
}

@media (max-width: 576px) {
  .date-badge {
    top: 14px;
    left: 14px;
    min-height: 32px;
    padding: 0 10px;
    font-size: 11px;
  }

  .blog-hero__media {
    border-radius: 20px;
  }

  .blog-hero__media img {
    height: 220px;
  }

  h1 {
    font-size: 26px;
  }
}
</style>
