// Texto enriquecido (Portable Text de Sanity) en su forma mínima: párrafos y viñetas,
// con negritas y enlaces. Incluye un conversor desde un markdown sencillo para el
// contenido local de respaldo y para la migración.

export type PTSpan = {
  _type: "span";
  _key: string;
  text: string;
  marks: string[];
};
export type PTBlock = {
  _type: "block";
  _key: string;
  style: "normal";
  listItem?: "bullet";
  level?: number;
  markDefs: { _type: "link"; _key: string; href: string }[];
  children: PTSpan[];
};

let n = 0;
const key = () => `k${(n++).toString(36)}`;

/** Convierte una línea con **negritas** y [enlaces](url) en spans */
function inline(text: string, markDefs: PTBlock["markDefs"]): PTSpan[] {
  const spans: PTSpan[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  for (const m of text.matchAll(re)) {
    if (m.index > last)
      spans.push({
        _type: "span",
        _key: key(),
        text: text.slice(last, m.index),
        marks: [],
      });
    if (m[1]) {
      spans.push({ _type: "span", _key: key(), text: m[1], marks: ["strong"] });
    } else {
      const k = key();
      markDefs.push({ _type: "link", _key: k, href: m[3] });
      spans.push({ _type: "span", _key: key(), text: m[2], marks: [k] });
    }
    last = m.index + m[0].length;
  }
  if (last < text.length)
    spans.push({
      _type: "span",
      _key: key(),
      text: text.slice(last),
      marks: [],
    });
  return spans;
}

/** Markdown sencillo → bloques: párrafos separados por línea en blanco y viñetas con "- " */
export function mdToBlocks(md: string): PTBlock[] {
  const blocks: PTBlock[] = [];
  for (const chunk of md.trim().split(/\n\s*\n/)) {
    const lines = chunk.split("\n").map((l) => l.trim());
    if (lines.every((l) => l.startsWith("- "))) {
      for (const l of lines) {
        const markDefs: PTBlock["markDefs"] = [];
        blocks.push({
          _type: "block",
          _key: key(),
          style: "normal",
          listItem: "bullet",
          level: 1,
          markDefs,
          children: inline(l.slice(2), markDefs),
        });
      }
    } else {
      const markDefs: PTBlock["markDefs"] = [];
      blocks.push({
        _type: "block",
        _key: key(),
        style: "normal",
        markDefs,
        children: inline(lines.join(" "), markDefs),
      });
    }
  }
  return blocks;
}
