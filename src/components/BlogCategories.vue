<script setup lang="ts">
import type { BlogCategory } from '../data/blogs'
import { BLOG_CATEGORIES } from '../data/blogs'

defineProps<{
  modelValue: BlogCategory
}>()

const emit = defineEmits<{
  'update:modelValue': [value: BlogCategory]
}>()
</script>

<template>
  <div class="category-bar" role="tablist" aria-label="Blog categories">
    <button
      v-for="category in BLOG_CATEGORIES"
      :key="category"
      class="category-chip"
      type="button"
      role="tab"
      :aria-selected="modelValue === category"
      :aria-pressed="modelValue === category"
      :class="{ 'category-chip--active': modelValue === category }"
      @click="emit('update:modelValue', category)"
    >
      {{ category }}
    </button>
  </div>
</template>

<style scoped>
.category-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
}

.category-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 20px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  color: var(--text-nav);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 180ms ease,
    background 220ms ease,
    color 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease;
}

.category-chip:hover,
.category-chip:focus-visible {
  color: var(--text);
  border-color: rgba(34, 211, 238, 0.42);
  transform: translateY(-1px);
}

.category-chip:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
}

.category-chip--active {
  border-color: transparent;
  background: linear-gradient(135deg, #08a9f5 0%, #0878f5 100%);
  color: #f8fafc;
  box-shadow: var(--shadow-button);
}

.category-chip--active:hover,
.category-chip--active:focus-visible {
  color: #f8fafc;
}

@media (max-width: 576px) {
  .category-bar {
    gap: 8px;
  }

  .category-chip {
    min-height: 40px;
    padding: 0 14px;
    font-size: 13px;
  }
}
</style>
