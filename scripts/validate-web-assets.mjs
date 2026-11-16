import { readFile, access } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const read = (p) => readFile(path.join(root, p), "utf8");
const check = (condition, message) => {
  if (!condition) throw new Error(message);
  console.log("PASS:", message);
};

const wiki = await read("wiki/index.html");
const deck = await read("slides/index.html");
const topicMarker = "const topics=";
const topicStart = wiki.indexOf(topicMarker);
const topicEnd = wiki.indexOf(";\nconst originalMarkdown=", topicStart);
check(topicStart >= 0 && topicEnd > topicStart, "Wiki topic data block is present");
const topics = JSON.parse(wiki.slice(topicStart + topicMarker.length, topicEnd));
const markdownMarker = "const originalMarkdown=";
const markdownStart = wiki.indexOf(markdownMarker, topicEnd);
const markdownEnd = wiki.indexOf(";\nconst GH", markdownStart);
check(markdownStart >= 0 && markdownEnd > markdownStart, "Wiki includes full original Markdown data");
const originalMarkdown = JSON.parse(wiki.slice(markdownStart + markdownMarker.length, markdownEnd));
check(topics.length === 8, "Wiki contains exactly 8 topic records");
check(new Set(topics.map((t) => t.id)).size === 8, "Wiki topic IDs are unique");

check(Object.keys(originalMarkdown).length === 8, "Wiki embeds all 8 original Markdown documents");
for (const topic of topics) {
  check(Boolean(topic.title && topic.en && topic.summary && topic.status), `Topic ${topic.id} has title, summary and evidence status`);
  const mdPath = path.join(root, "wiki", topic.file);
  await access(mdPath);
  check(originalMarkdown[topic.file] === await readFile(mdPath, "utf8"), `Topic ${topic.id} embedded Markdown matches source file`);
  for (const id of topic.sources) await access(path.join(root, "cards", id + ".md"));
}
console.log("PASS: all Wiki Markdown files and cited evidence cards exist");

const slideSections = [...deck.matchAll(/<section class="slide(?: active)?" aria-label="第 \d+ 頁">/g)];
const slideDots = [...deck.matchAll(/class="dot-link"[^>]*data-slide=/g)];
check(slideSections.length === 12, "HTML deck contains exactly 12 slides");
check(slideDots.length === 12, "Slide navigation contains 12 page tabs");
check(deck.includes("PHOTO CREDITS") && deck.includes("Pexels"), "Slide photo credits are present");

for (const [name, html] of [["Wiki", wiki], ["Slides", deck]]) {
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  check(scripts.length === 1, name + " has one inline script block");
  new Function(scripts[0][1]);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]).filter((id) => !id.includes("'+") && !id.includes("\${"));
  check(new Set(ids).size === ids.length, name + " has unique HTML IDs");
  check((html.match(/<img\b[^>]*\balt=/g) || []).length === (html.match(/<img\b/g) || []).length,
    name + " images all have alt text");
}

check(wiki.includes("localStorage") && wiki.includes('search.addEventListener("input"') && wiki.includes('favoritesBtn') && wiki.includes('themeBtn'),
  "Wiki includes search, favorites and reading-theme interactions");
check(deck.includes("addEventListener('wheel'") && deck.includes("ArrowRight") && deck.includes("touchend"),
  "Slides include wheel, keyboard and touch navigation");

console.log("PASS: static validation complete. Real browser visual and interaction checks are still required.");
