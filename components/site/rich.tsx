import Link from "next/link";
import { Fragment } from "react";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

// Texto editable con enlaces opcionales escritos como [texto](/ruta/)
export function Rich({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    const [all, label, href] = m;
    parts.push(text.slice(last, m.index));
    const internal = href.startsWith("/") || href.startsWith("#");
    parts.push(
      internal ? (
        <Link
          key={m.index}
          href={href}
          className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
        >
          {label}
        </Link>
      ) : (
        <a
          key={m.index}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
        >
          {label}
        </a>
      ),
    );
    last = m.index + all.length;
  }
  parts.push(text.slice(last));
  return <Fragment>{parts}</Fragment>;
}

/** Quita la sintaxis de enlaces para usar el texto plano (p. ej. en JSON-LD) */
export const plain = (text: string) => text.replace(LINK, "$1");
