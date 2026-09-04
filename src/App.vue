<script setup lang="ts">
import FloatingChat from './components/FloatingChat.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="page-shell">
    <Navbar />
    <RouterView />
    <FloatingChat />
  </div>
</template>

<style>
:root {
  --background: #020617;
  --background-mid: #04101e;
  --surface: rgba(5, 12, 25, 0.72);
  --surface-strong: rgba(5, 12, 25, 0.95);
  --surface-solid: rgba(11, 18, 32, 0.9);
  --surface-muted: rgba(11, 18, 32, 0.64);
  --surface-editor: linear-gradient(180deg, rgba(10, 20, 39, 0.98), rgba(5, 12, 25, 0.98));
  --surface-topbar: rgba(7, 16, 31, 0.88);
  --surface-terminal: rgba(2, 6, 23, 0.88);
  --surface-card: rgba(8, 15, 29, 0.82);
  --surface-tab: rgba(15, 23, 42, 0.95);
  --text: #f8fafc;
  --text-muted: #a9b8cc;
  --text-nav: #cbd5e1;
  --text-subtle: #94a3b8;
  --text-faint: #64748b;
  --border: rgba(148, 163, 184, 0.18);
  --border-subtle: rgba(148, 163, 184, 0.16);
  --border-editor: rgba(148, 163, 184, 0.13);
  --accent: #08a9f5;
  --accent-cyan: #22d3ee;
  --accent-soft: #67e8f9;
  --shadow: 0 22px 80px rgba(0, 0, 0, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  --shadow-card: 0 22px 55px rgba(0, 0, 0, 0.36), 0 0 34px rgba(8, 169, 245, 0.18);
  --shadow-editor:
    0 0 0 1px rgba(34, 211, 238, 0.05),
    0 36px 100px rgba(0, 0, 0, 0.45),
    0 0 70px rgba(8, 169, 245, 0.18);
  --shadow-glow: 0 0 24px rgba(8, 169, 245, 0.2);
  --shadow-button: 0 18px 42px rgba(8, 169, 245, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.18);
  --glow-primary: rgba(8, 169, 245, 0.22);
  --glow-primary-soft: rgba(8, 169, 245, 0.08);
  --glow-secondary: rgba(34, 211, 238, 0.13);
  --glow-secondary-soft: rgba(34, 211, 238, 0.04);
  --grid-line: rgba(148, 163, 184, 0.035);
  --code-keyword: #c084fc;
  --code-string: #86efac;
  --code-function: #22d3ee;
  --code-boolean: #60a5fa;
  --code-number: #fbbf24;
  --code-comment: #64748b;
  --code-punctuation: #8aa3bb;
  --code-marker: #4b647d;
  --code-prompt: #67e8f9;
  --editor-border-glow: linear-gradient(135deg, rgba(34, 211, 238, 0.24), transparent 34%, rgba(8, 169, 245, 0.2));
  --pill-bg: rgba(8, 169, 245, 0.08);
  --pill-shadow: inset 0 0 22px rgba(8, 169, 245, 0.08), 0 0 28px rgba(34, 211, 238, 0.08);
  --brand-mark-bg: linear-gradient(145deg, rgba(8, 169, 245, 0.2), rgba(7, 16, 31, 0.8));
}

[data-theme="light"] {
  --background: #f3f7fb;
  --background-mid: #e7f3fb;
  --surface: rgba(255, 255, 255, 0.82);
  --surface-strong: rgba(255, 255, 255, 0.96);
  --surface-solid: rgba(255, 255, 255, 0.95);
  --surface-muted: rgba(255, 255, 255, 0.72);
  --surface-editor: linear-gradient(180deg, #ffffff, #f7fbfe);
  --surface-topbar: rgba(241, 247, 252, 0.95);
  --surface-terminal: #f4f8fc;
  --surface-card: rgba(255, 255, 255, 0.9);
  --surface-tab: #ffffff;
  --text: #0f172a;
  --text-muted: #475569;
  --text-nav: #334155;
  --text-subtle: #64748b;
  --text-faint: #64748b;
  --border: rgba(15, 23, 42, 0.1);
  --border-subtle: rgba(15, 23, 42, 0.1);
  --border-editor: rgba(15, 23, 42, 0.08);
  --accent: #08a9f5;
  --accent-cyan: #0891b2;
  --accent-soft: #0e7490;
  --shadow: 0 18px 50px rgba(15, 23, 42, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8);
  --shadow-card: 0 18px 40px rgba(15, 23, 42, 0.1), 0 0 24px rgba(8, 169, 245, 0.12);
  --shadow-editor:
    0 0 0 1px rgba(8, 169, 245, 0.08),
    0 28px 70px rgba(15, 23, 42, 0.12),
    0 0 40px rgba(8, 169, 245, 0.1);
  --shadow-glow: 0 0 18px rgba(8, 169, 245, 0.16);
  --shadow-button: 0 16px 32px rgba(8, 169, 245, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.28);
  --glow-primary: rgba(8, 169, 245, 0.2);
  --glow-primary-soft: rgba(8, 169, 245, 0.07);
  --glow-secondary: rgba(34, 211, 238, 0.14);
  --glow-secondary-soft: rgba(34, 211, 238, 0.05);
  --grid-line: rgba(15, 23, 42, 0.045);
  --code-keyword: #7c3aed;
  --code-string: #047857;
  --code-function: #0e7490;
  --code-boolean: #1d4ed8;
  --code-number: #b45309;
  --code-comment: #64748b;
  --code-punctuation: #64748b;
  --code-marker: #94a3b8;
  --code-prompt: #0e7490;
  --editor-border-glow: linear-gradient(135deg, rgba(8, 169, 245, 0.28), transparent 34%, rgba(34, 211, 238, 0.18));
  --pill-bg: rgba(8, 169, 245, 0.1);
  --pill-shadow: inset 0 0 18px rgba(8, 169, 245, 0.06), 0 0 20px rgba(8, 169, 245, 0.08);
  --brand-mark-bg: linear-gradient(145deg, rgba(8, 169, 245, 0.16), rgba(255, 255, 255, 0.9));
}

html {
  min-width: 0;
  background: var(--background);
  color: var(--text);
  color-scheme: dark;
  transition: background-color 280ms ease, color 280ms ease;
}

html[data-theme="light"] {
  color-scheme: light;
}

:root {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--text);
  background: var(--background);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

body {
  min-width: 0;
  min-height: 100vh;
  margin: 0;
  overflow-x: hidden;
  background: var(--background);
  color: var(--text);
  transition: background-color 280ms ease, color 280ms ease;
}

button,
a {
  font: inherit;
}

button {
  border: 0;
}

#app {
  min-height: 100vh;
  background: var(--background);
  color: var(--text);
}

.page-shell {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 73% 38%, var(--glow-primary) 0, var(--glow-primary-soft) 24%, transparent 45%),
    radial-gradient(circle at 26% 44%, var(--glow-secondary) 0, var(--glow-secondary-soft) 28%, transparent 48%),
    linear-gradient(135deg, var(--background) 0%, var(--background-mid) 44%, var(--background) 100%);
  transition: background 280ms ease;
}

.page-shell::before {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: "";
  background:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(circle at 52% 42%, black, transparent 72%);
}

@media (prefers-reduced-motion: reduce) {
  html,
  body {
    transition: none;
  }
}
</style>
