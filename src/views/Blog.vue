<script setup lang="ts">
import { computed, ref } from 'vue'
import BlogCard from '../components/BlogCard.vue'
import BlogCategories from '../components/BlogCategories.vue'
import BlogHero from '../components/BlogHero.vue'
import { postsByCategory, type BlogCategory } from '../data/blogs'

const selectedCategory = ref<BlogCategory>('Frontend')

const categoryPosts = computed(() => postsByCategory(selectedCategory.value))
const featuredPost = computed(() => categoryPosts.value[0])
const remainingPosts = computed(() => categoryPosts.value.slice(1))
</script>

<template>
  <main class="blog-page">
    <div class="blog-page__inner">
      <BlogCategories v-model="selectedCategory" />

      <Transition name="blog-swap" mode="out-in">
        <section :key="selectedCategory" class="blog-page__content" :aria-label="`${selectedCategory} articles`">
          <BlogHero v-if="featuredPost" :post="featuredPost" />

          <div v-if="remainingPosts.length" class="blog-grid">
            <BlogCard v-for="post in remainingPosts" :key="post.id" :post="post" />
          </div>
        </section>
      </Transition>
    </div>
  </main>
</template>

<style scoped>
.blog-page {
  position: relative;
  z-index: 1;
  width: 100%;
  min-width: 0;
  padding: 148px 24px 120px;
}

.blog-page__inner {
  display: grid;
  gap: 36px;
  width: min(1180px, 100%);
  margin: 0 auto;
}

.blog-page__content {
  display: grid;
  gap: 36px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.blog-swap-enter-active,
.blog-swap-leave-active {
  transition: opacity 220ms ease, transform 220ms ease;
}

.blog-swap-enter-from,
.blog-swap-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (prefers-reduced-motion: reduce) {
  .blog-swap-enter-active,
  .blog-swap-leave-active {
    transition: none;
  }
}

@media (max-width: 992px) {
  .blog-page {
    padding: 130px 18px 96px;
  }
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .blog-page {
    padding: 118px 12px 88px;
  }

  .blog-page__inner,
  .blog-page__content {
    gap: 24px;
  }
}
</style>
