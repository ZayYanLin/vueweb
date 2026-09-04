<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '../composables/useTheme'

const { theme, isDark, toggleTheme } = useTheme()

const label = computed(() =>
  isDark.value ? 'Switch to light mode' : 'Switch to dark mode',
)
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="label"
    :aria-pressed="theme === 'dark'"
    :title="label"
    @click="toggleTheme"
  >
    <svg v-if="isDark" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v1.5M12 19.5V21M4.93 4.93l1.06 1.06M18.01 18.01l1.06 1.06M3 12h1.5M19.5 12H21M4.93 19.07l1.06-1.06M18.01 5.99l1.06-1.06" />
    </svg>
    <svg v-else viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.5 13.5A7 7 0 0 1 10.5 4.2 7.5 7.5 0 1 0 19.8 13.5a7 7 0 0 1-3.3 0Z" />
    </svg>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: grid;
  width: 44px;
  height: 44px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  background: var(--surface-solid);
  color: var(--text);
  cursor: pointer;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease,
    background-color 280ms ease,
    color 280ms ease;
}

.theme-toggle:hover,
.theme-toggle:focus-visible {
  outline: none;
  border-color: rgba(34, 211, 238, 0.45);
  box-shadow: var(--shadow-glow);
  transform: translateY(-1px);
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
}

.theme-toggle svg {
  width: 19px;
  height: 19px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}

@media (max-width: 576px) {
  .theme-toggle {
    width: 42px;
    height: 42px;
  }
}
</style>
