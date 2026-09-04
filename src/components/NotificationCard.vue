<template>
  <aside class="system-card" aria-label="System optimized notification">
    <div class="system-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M12 5v14M5 12h14M7 7h3M14 17h3" />
      </svg>
    </div>
    <div>
      <p>SYSTEM</p>
      <strong>Optimized</strong>
    </div>
  </aside>
</template>

<style scoped>
.system-card {
  position: absolute;
  top: 62px;
  right: -24px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 13px;
  width: 174px;
  min-height: 74px;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--surface-card);
  box-shadow: var(--shadow-card);
  backdrop-filter: blur(18px);
  animation: float-card 4.5s ease-in-out infinite;
  transition: background-color 280ms ease, border-color 280ms ease, box-shadow 280ms ease, color 280ms ease;
}

.system-card__icon {
  display: grid;
  flex: 0 0 auto;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 10px;
  background: linear-gradient(145deg, #08a9f5, #2563eb);
  box-shadow: 0 0 24px rgba(8, 169, 245, 0.36);
}

.system-card__icon svg {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}

p {
  margin: 0 0 4px;
  color: var(--text-subtle);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1.4px;
}

strong {
  display: block;
  color: var(--text);
  font-size: 17px;
  line-height: 1.1;
}

@keyframes float-card {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 1200px) {
  .system-card {
    right: -8px;
  }
}

@media (max-width: 992px) {
  .system-card {
    right: 16px;
  }
}

@media (max-width: 576px) {
  .system-card {
    top: 52px;
    right: 10px;
    width: 148px;
    min-height: 62px;
    padding: 11px 12px;
    border-radius: 15px;
  }

  .system-card__icon {
    width: 32px;
    height: 32px;
    border-radius: 9px;
  }

  .system-card__icon svg {
    width: 17px;
    height: 17px;
  }

  p {
    font-size: 9px;
  }

  strong {
    font-size: 14px;
  }
}
</style>
