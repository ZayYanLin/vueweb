<template>
  <button class="chat-button" type="button" aria-label="Open chat support">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 4 11.5a8.5 8.5 0 1 1 17 0Z" />
      <path d="M8.4 11.5h.01M12 11.5h.01M15.6 11.5h.01" />
    </svg>
  </button>
</template>

<style scoped>
.chat-button {
  position: fixed;
  right: 34px;
  bottom: 30px;
  z-index: 30;
  display: grid;
  width: 64px;
  height: 64px;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(145deg, #22d3ee 0%, #08a9f5 48%, #2563eb 100%);
  box-shadow: 0 18px 42px rgba(8, 169, 245, 0.38), 0 0 34px rgba(34, 211, 238, 0.24);
  color: white;
  cursor: pointer;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.chat-button:hover,
.chat-button:focus-visible {
  box-shadow: 0 22px 55px rgba(8, 169, 245, 0.5), 0 0 42px rgba(34, 211, 238, 0.32);
  transform: scale(1.06);
}

.chat-button svg {
  width: 31px;
  height: 31px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}

@media (max-width: 576px) {
  .chat-button {
    right: 18px;
    bottom: 18px;
    width: 56px;
    height: 56px;
  }

  .chat-button svg {
    width: 27px;
    height: 27px;
  }
}
</style>
