import { computed, ref } from 'vue'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'

const theme = ref<Theme>('dark')

function isTheme(value: string | null): value is Theme {
  return value === 'dark' || value === 'light'
}

function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return isTheme(stored) ? stored : null
  } catch {
    return null
  }
}

function applyTheme(value: Theme) {
  const root = document.documentElement
  root.dataset.theme = value
  root.style.colorScheme = value
}

function resolveTheme(): Theme {
  return readStoredTheme() ?? systemTheme()
}

export function initTheme() {
  const initial = resolveTheme()
  theme.value = initial
  applyTheme(initial)
}

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')

  function setTheme(value: Theme) {
    theme.value = value
    applyTheme(value)
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // Ignore quota / private-mode failures; in-memory theme still applies.
    }
  }

  function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
  }
}
