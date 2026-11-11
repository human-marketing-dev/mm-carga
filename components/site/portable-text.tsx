import Link from "next/link";
import type { ReactNode } from "react";
import type { PTBlock } from "@/lib/portable-text";

function Spans({ block }: { block: PTBlock }) {
  return block.children.map((s) => {
    let node: ReactNode = s.text;
    for (const mark of s.marks ?? []) {
      if (mark === "strong") node = <strong key={mark}>{node}</strong>;
      else if (mark === "em") node = <em key={mark}>{node}</em>;
      else {
        const def = block.markDefs?.find((d) => d._key === mark);
        if (def?.href) {
          const cls = "font-semibold text-primary hover:underline";
          node = def.href.startsWith("/") ? (
            <Link key={mark} href={def.href} className={cls}>
              {node}
            </Link>
          ) : (
            <a key={mark} href={def.href} className={cls}>
              {node}
            </a>
          );
        }
      }
    }
    return <span key={s._key}>{node}</span>;
  });
}

// Texto enriquecido de Sanity: párrafos y viñetas (las viñetas seguidas forman una lista)
export function PortableText({ value }: { value: PTBlock[] }) {
  const out: ReactNode[] = [];
  let list: PTBlock[] = [];
  const flush = () => {
    if (list.length)
      out.push(
        <ul key={list[0]._key}>
          {list.map((b) => (
            <li key={b._key}>
              <Spans block={b} />
            </li>
          ))}
        </ul>,
      );
    list = [];
  };
  for (const b of value) {
    if (b.listItem) {
      list.push(b);
      continue;
    }
    flush();
    out.push(
      <p key={b._key}>
        <Spans block={b} />
      </p>,
    );
  }
  flush();
  return out;
}
