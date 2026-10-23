"use strict";

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());

const copyButton = document.querySelector("[data-copy-link]");
const toast = document.querySelector(".toast");
const homepageUrl = "https://stormdg.github.io/";
let toastTimer;

function notify(message) {
  if (!toast) return;
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 4500);
}

function copyWithSelection(text) {
  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.setAttribute("aria-label", "主页地址");
  input.style.cssText = "position:fixed;top:0;left:-9999px;";
  document.body.append(input);
  try {
    input.select();
    input.setSelectionRange(0, text.length);
    return document.execCommand("copy");
  } finally {
    input.remove();
    copyButton?.focus({ preventScroll: true });
  }
}

copyButton?.addEventListener("click", async () => {
  copyButton.disabled = true;
  try {
    let copied = false;
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(homepageUrl);
        copied = true;
      } catch {
        // Browser permissions can block clipboard access; try selection below.
      }
    }
    if (!copied) copied = copyWithSelection(homepageUrl);
    notify(copied ? "主页链接已复制，分享给新朋友吧。" : `请复制主页地址：${homepageUrl}`);
  } catch {
    notify(`请复制主页地址：${homepageUrl}`);
  } finally {
    copyButton.disabled = false;
  }
});
