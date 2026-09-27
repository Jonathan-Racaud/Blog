/* Theme Lab — page-specific interactivity (loaded only by theme-lab.html).
   Tiny, dependency-free. Progressive enhancement: no snippet, no script. */
(() => {
  const copyButtons = document.querySelectorAll(".snippet-copy");

  copyButtons.forEach((button) => {
    const originalLabel = button.textContent.trim();

    button.addEventListener("click", async () => {
      const snippet = button.closest(".snippet");
      const code = snippet && snippet.querySelector(".snippet-code code");
      if (!code) return;

      const text = code.innerText;

      try {
        await navigator.clipboard.writeText(text);
      } catch (err) {
        // Clipboard API unavailable (non-secure context / permission) — fallback.
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand("copy");
        } catch (fallbackErr) {
          /* give up quietly */
        }
        document.body.removeChild(textarea);
      }

      button.classList.add("is-copied");
      button.textContent = "COPIED";
      window.setTimeout(() => {
        button.classList.remove("is-copied");
        button.textContent = originalLabel;
      }, 1600);
    });
  });
})();
