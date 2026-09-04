<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const isOpen = ref(false)
const route = useRoute()

type NavItem = {
  label: string
  to?: string
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  // { label: 'Courses' },
  // { label: 'Roadmap' },
  // { label: 'Content' },
  { label: 'Blogs', to: '/blogs' },
]

function isActive(to?: string) {
  return Boolean(to) && route.path === to
}

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <nav class="navbar" aria-label="Primary navigation">
      <RouterLink class="brand" to="/" aria-label="Creative Coder home" @click="closeMenu">
        <span class="brand-mark" aria-hidden="true">
          <span class="brand-mark__slash">&lt;/&gt;</span>
        </span>
        <span class="brand-copy">
          <span class="brand-copy__main">Creative</span>
          <span class="brand-copy__sub">Designer</span>
        </span>
      </RouterLink>

      <button class="menu-button" type="button" :aria-expanded="isOpen" aria-controls="primary-menu" @click="isOpen = !isOpen">
        <span class="sr-only">Toggle navigation</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <div id="primary-menu" class="nav-panel" :class="{ 'nav-panel--open': isOpen }">
        <ul class="nav-links">
          <li v-for="item in navItems" :key="item.label" class="nav-links__item">
            <RouterLink
              v-if="item.to"
              class="nav-link"
              :class="{ 'nav-link--active': isActive(item.to) }"
              :to="item.to"
              @click="closeMenu"
            >
              {{ item.label }}
            </RouterLink>
            <a v-else class="nav-link" href="#">
              {{ item.label }}
            </a>
          </li>
        </ul>

        <div class="nav-actions" aria-label="User actions">
          <button class="icon-button avatar-button" type="button" aria-label="Open profile">
            <span class="avatar" aria-hidden="true">C</span>
          </button>
          <button class="icon-button" type="button" aria-label="Notifications">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
          <button class="icon-button" type="button" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.6-3.6" />
            </svg>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 24px;
  left: 0;
  z-index: 20;
  width: 100%;
  padding: 0 24px;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1180px, 100%);
  min-height: 76px;
  margin: 0 auto;
  padding: 12px 16px 12px 20px;
  border: 1px solid var(--border);
  border-radius: 24px;
  background: var(--surface);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
  transition: background-color 280ms ease, border-color 280ms ease, box-shadow 280ms ease;
}

.brand {
  display: inline-flex;
  align-items: center;
  min-width: 182px;
  color: var(--text);
  text-decoration: none;
}

.brand-mark {
  display: grid;
  width: 46px;
  height: 46px;
  margin-right: 12px;
  place-items: center;
  border: 1px solid rgba(34, 211, 238, 0.42);
  border-radius: 14px;
  background: var(--brand-mark-bg);
  box-shadow: 0 0 28px rgba(8, 169, 245, 0.2);
}

.brand-mark__slash {
  font-family: "Fira Code", Consolas, "Courier New", monospace;
  font-size: 13px;
  font-weight: 800;
  color: var(--accent-cyan);
}

.brand-copy {
  display: grid;
  line-height: 1;
}

.brand-copy__main {
  font-size: 18px;
  font-weight: 800;
}

.brand-copy__sub {
  margin-top: 5px;
  font-size: 11px;
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.nav-panel {
  display: contents;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 31px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  color: var(--text-nav);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: color 180ms ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  color: var(--text);
}

.nav-link--active {
  color: var(--accent-cyan);
}

.nav-link--active::after {
  position: absolute;
  right: 8px;
  bottom: 0;
  left: 8px;
  height: 2px;
  content: "";
  border-radius: 999px;
  background: linear-gradient(90deg, #08a9f5, #22d3ee);
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.55);
}

.new-badge {
  position: absolute;
  top: -13px;
  right: -21px;
  padding: 2px 6px;
  border-radius: 999px;
  background: var(--accent);
  color: #f8fafc;
  font-size: 9px;
  font-weight: 800;
  line-height: 1.2;
}

.nav-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  min-width: 182px;
}

.icon-button {
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  background: var(--surface-solid);
  color: var(--text);
  cursor: pointer;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease, background-color 280ms ease, color 280ms ease;
}

.icon-button:hover,
.icon-button:focus-visible {
  border-color: rgba(34, 211, 238, 0.45);
  box-shadow: var(--shadow-glow);
  transform: translateY(-1px);
}

.icon-button svg {
  width: 19px;
  height: 19px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}

.avatar-button {
  border-radius: 50%;
  padding: 0;
}

.avatar {
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(145deg, #22d3ee, #2563eb 52%, #0f172a);
  color: white;
  font-weight: 900;
}

.menu-button {
  display: none;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  background: var(--surface-solid);
  color: var(--text);
  cursor: pointer;
}

.menu-button svg {
  width: 22px;
  height: 22px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: 2;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 992px) {
  .site-header {
    top: 16px;
    padding: 0 18px;
  }

  .navbar {
    position: relative;
    min-height: 68px;
    border-radius: 20px;
  }

  .brand {
    min-width: auto;
  }

  .menu-button {
    display: grid;
  }

  .nav-panel {
    position: absolute;
    top: calc(100% + 12px);
    right: 0;
    left: 0;
    display: grid;
    gap: 18px;
    padding: 18px;
    border: 1px solid var(--border);
    border-radius: 20px;
    background: var(--surface-strong);
    box-shadow: var(--shadow-card);
    visibility: hidden;
    opacity: 0;
    transform: translateY(-8px);
    transition: opacity 180ms ease, transform 180ms ease, visibility 180ms ease, background-color 280ms ease, border-color 280ms ease;
  }

  .nav-panel--open {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }

  .nav-links {
    display: grid;
    gap: 8px;
  }

  .nav-link {
    width: 100%;
    min-height: 42px;
  }

  .new-badge {
    position: static;
    order: 2;
    margin-left: 8px;
  }

  .nav-actions {
    justify-content: flex-start;
    min-width: auto;
    flex-wrap: wrap;
  }
}

@media (max-width: 576px) {
  .site-header {
    top: 12px;
    padding: 0 12px;
  }

  .navbar {
    min-height: 62px;
    padding: 9px 10px 9px 13px;
  }

  .brand-mark {
    width: 40px;
    height: 40px;
    margin-right: 9px;
    border-radius: 12px;
  }

  .brand-copy__main {
    font-size: 16px;
  }

  .brand-copy__sub {
    font-size: 9px;
  }

  .icon-button {
    width: 42px;
    height: 42px;
  }
}
</style>
