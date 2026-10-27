import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "./button";

type Props = {
  title: string;
  description: string;
  image: string;
  href: string;
  icon?: ReactNode;
};

export function ServiceCard({ title, description, image, href, icon }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-card border border-brand-800/8 bg-white shadow-card transition hover:-translate-y-1 hover:border-brand-800/22 hover:shadow-card-hover">
      <div className="relative h-46.25">
        <Image src={image} alt="" fill className="object-cover" sizes="(max-width: 580px) 100vw, 20vw" />
        <div className="absolute inset-0 bg-linear-to-t from-[rgba(3,30,68,0.38)] to-[rgba(3,30,68,0.02)]" />
        {icon && (
          <span className="absolute -bottom-7.75 left-6 grid size-15.5 place-items-center rounded-full border-5 border-white bg-brand-800 text-white shadow-[0_8px_20px_rgba(7,59,131,0.28)]">
            {icon}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 px-6 pt-12 pb-7">
        <h3 className="text-card-title font-extrabold text-brand-800">{title}</h3>
        <p className="flex-1 text-small text-muted">{description}</p>
        <Button variant="solid" href={href} className="self-start">
          Ver más
        </Button>
      </div>
    </article>
  );
}
