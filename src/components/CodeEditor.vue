<template>
  <article class="editor" aria-label="Code editor mockup">
    <div class="editor__topbar">
      <div class="window-controls" aria-hidden="true">
        <span class="dot dot--red"></span>
        <span class="dot dot--yellow"></span>
        <span class="dot dot--green"></span>
      </div>
      <div class="editor-tab">career_path.ts</div>
    </div>

    <div class="editor__body">
      <ol class="code-lines">
        <li><span class="keyword">const</span> dream <span class="operator">=</span> <span class="string">"Become_Developer"</span><span class="punctuation">;</span></li>
        <li></li>
        <li><span class="keyword">await</span> <span class="function">CreativeCoder</span><span class="punctuation">.</span><span class="method">analyze</span><span class="punctuation">({</span></li>
        <li>  student<span class="operator">:</span> <span class="string">"Beginner"</span><span class="punctuation">,</span></li>
        <li>  roadmap<span class="operator">:</span> <span class="string">"Full Stack"</span><span class="punctuation">,</span></li>
        <li>  aiMentor<span class="operator">:</span> <span class="boolean">true</span><span class="punctuation">,</span></li>
        <li>  weeks<span class="operator">:</span> <span class="number">24</span></li>
        <li><span class="punctuation">});</span></li>
        <li></li>
        <li><span class="comment">// Build skills. Ship projects. Start career.</span></li>
      </ol>
    </div>

    <div class="terminal">
      <div class="terminal__tabs">
        <button class="terminal__tab terminal__tab--active" type="button">TERMINAL</button>
        <button class="terminal__tab" type="button">OUTPUT</button>
        <button class="terminal__tab" type="button">PROBLEMS</button>
      </div>
      <div class="terminal__content">
        <p><span class="prompt">~/creative-coder git:(main)</span> <span class="check">✓</span></p>
        <p><span class="log">LOG:</span> System Initialized</p>
        <p>
          Analysis complete. Recommended path: Full Stack Roadmap starting with JavaScript
          fundamentals and React mastery.
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.editor {
  position: relative;
  width: min(100%, 620px);
  min-height: 492px;
  margin-left: auto;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 24px;
  background: var(--surface-editor);
  box-shadow: var(--shadow-editor);
  transition: background 280ms ease, border-color 280ms ease, box-shadow 280ms ease;
}

.editor::before {
  position: absolute;
  inset: -1px;
  padding: 1px;
  pointer-events: none;
  content: "";
  border-radius: inherit;
  background: var(--editor-border-glow);
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
}

.editor__topbar {
  display: flex;
  align-items: center;
  height: 66px;
  padding: 0 22px;
  border-bottom: 1px solid var(--border-editor);
  background: var(--surface-topbar);
  transition: background-color 280ms ease, border-color 280ms ease;
}

.window-controls {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-right: 26px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot--red {
  background: #ff5f57;
}

.dot--yellow {
  background: #ffbd2e;
}

.dot--green {
  background: #28c840;
}

.editor-tab {
  display: inline-flex;
  align-items: center;
  height: 34px;
  padding: 0 18px;
  border: 1px solid var(--border-subtle);
  border-radius: 10px 10px 0 0;
  background: var(--surface-tab);
  color: var(--text-nav);
  font-family: "Fira Code", Consolas, "Courier New", monospace;
  font-size: 13px;
}

.editor__body {
  min-height: 264px;
  padding: 26px 28px 23px 0;
}

.code-lines {
  margin: 0;
  padding-left: 72px;
  color: var(--text-nav);
  font-family: "Fira Code", Consolas, "Courier New", monospace;
  font-size: 15px;
  line-height: 1.9;
}

.code-lines li {
  min-height: 28px;
  padding-left: 20px;
  white-space: pre-wrap;
}

.code-lines li::marker {
  color: var(--code-marker);
  font-size: 13px;
}

.keyword {
  color: var(--code-keyword);
}

.operator,
.punctuation {
  color: var(--code-punctuation);
}

.string {
  color: var(--code-string);
}

.function,
.method {
  color: var(--code-function);
}

.boolean {
  color: var(--code-boolean);
}

.number {
  color: var(--code-number);
}

.comment {
  color: var(--code-comment);
}

.terminal {
  border-top: 1px solid var(--border-editor);
  background: var(--surface-terminal);
  transition: background-color 280ms ease, border-color 280ms ease, color 280ms ease;
}

.terminal__tabs {
  display: flex;
  align-items: center;
  gap: 24px;
  height: 45px;
  padding: 0 26px;
  border-bottom: 1px solid var(--border-editor);
}

.terminal__tab {
  position: relative;
  padding: 0;
  background: transparent;
  color: var(--text-faint);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1.5px;
}

.terminal__tab--active {
  color: var(--accent-cyan);
}

.terminal__tab--active::after {
  position: absolute;
  right: 0;
  bottom: -15px;
  left: 0;
  height: 2px;
  content: "";
  border-radius: 999px;
  background: var(--accent-cyan);
}

.terminal__content {
  min-height: 115px;
  padding: 18px 26px 22px;
  color: var(--text-muted);
  font-family: "Fira Code", Consolas, "Courier New", monospace;
  font-size: 12.5px;
  line-height: 1.68;
}

.terminal__content p {
  margin: 0 0 8px;
}

.prompt {
  color: var(--code-prompt);
}

.check {
  color: #22c55e;
}

.log {
  color: #60a5fa;
  font-weight: 800;
}

@media (max-width: 992px) {
  .editor {
    margin-right: auto;
  }
}

@media (max-width: 576px) {
  .editor {
    min-height: auto;
    border-radius: 18px;
  }

  .editor__topbar {
    height: 56px;
    padding: 0 14px;
  }

  .window-controls {
    gap: 7px;
    margin-right: 13px;
  }

  .dot {
    width: 10px;
    height: 10px;
  }

  .editor-tab {
    height: 30px;
    padding: 0 10px;
    font-size: 11px;
  }

  .editor__body {
    padding: 18px 12px 17px 0;
  }

  .code-lines {
    padding-left: 48px;
    font-size: 11.5px;
    line-height: 1.75;
  }

  .code-lines li {
    min-height: 21px;
    padding-left: 10px;
  }

  .code-lines li::marker {
    font-size: 10px;
  }

  .terminal__tabs {
    height: 39px;
    gap: 16px;
    padding: 0 16px;
  }

  .terminal__tab {
    font-size: 9.5px;
  }

  .terminal__tab--active::after {
    bottom: -13px;
  }

  .terminal__content {
    min-height: 108px;
    padding: 14px 16px 18px;
    font-size: 10.5px;
  }
}
</style>
