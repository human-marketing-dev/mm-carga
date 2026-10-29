import type { ReactNode } from "react";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// Transporte + almacén + maniobras: piezas que encajan
export const IconIntegral = () => (
  <Icon>
    <path d="M3 10.5 12 6l9 4.5v8.25H3V10.5Z" />
    <path d="M7 18.75v-5h10v5M7 15.75h10" />
  </Icon>
);

export const IconFleet = () => (
  <Icon>
    <path d="M2.75 6.75h11v9.5h-11zM13.75 9.75h4l3.5 3.5v3h-7.5" />
    <circle cx="7" cy="17.25" r="1.75" />
    <circle cx="17.5" cy="17.25" r="1.75" />
  </Icon>
);

export const IconMonitoring = () => (
  <Icon>
    <path d="M12 21s-6.75-5.6-6.75-11.25a6.75 6.75 0 0 1 13.5 0C18.75 15.4 12 21 12 21Z" />
    <circle cx="12" cy="9.75" r="2.5" />
  </Icon>
);

export const IconCertified = () => (
  <Icon>
    <path d="M12 2.75 19.25 5.5v5.75c0 4.6-3.05 8.4-7.25 10-4.2-1.6-7.25-5.4-7.25-10V5.5L12 2.75Z" />
    <path d="m8.75 12 2.25 2.25 4.25-4.5" />
  </Icon>
);

export const IconRoute = () => (
  <Icon>
    <circle cx="6" cy="18" r="2.25" />
    <circle cx="18" cy="6" r="2.25" />
    <path d="M8.25 18h7.5a3 3 0 0 0 0-6h-7.5a3 3 0 0 1 0-6h7.5" />
  </Icon>
);

// Cruce fronterizo: carretera que pasa una línea
export const IconBorder = () => (
  <Icon>
    <path d="M3 12h18M17 8l4 4-4 4" />
    <path d="M10 3.75v4M10 16.25v4" strokeDasharray="1.5 2" />
  </Icon>
);

// Drop & Hook: caja que se queda en el andén
export const IconTrailer = () => (
  <Icon>
    <path d="M2.75 6.25h14v10h-14zM16.75 13.25h3.5" />
    <circle cx="6.5" cy="18.25" r="1.75" />
    <circle cx="11" cy="18.25" r="1.75" />
    <path d="M20.25 10.5v5.75" />
  </Icon>
);

export const IconSwap = () => (
  <Icon>
    <path d="M4 8h14l-3.5-3.5M20 16H6l3.5 3.5" />
  </Icon>
);

export const IconClock = () => (
  <Icon>
    <circle cx="12" cy="12" r="8.25" />
    <path d="M12 7.5V12l3 2" />
  </Icon>
);

export const IconEye = () => (
  <Icon>
    <path d="M2.75 12S6.25 5.75 12 5.75 21.25 12 21.25 12 17.75 18.25 12 18.25 2.75 12 2.75 12Z" />
    <circle cx="12" cy="12" r="2.75" />
  </Icon>
);

// Tolva: remolque abierto arriba
export const IconHopper = () => (
  <Icon>
    <path d="M2.75 6.75h15.5l-2 8.5H4.75l-2-8.5ZM18.25 12.25h3" />
    <circle cx="7" cy="17.75" r="1.75" />
    <circle cx="14" cy="17.75" r="1.75" />
  </Icon>
);

// Material a granel en capas
export const IconLayers = () => (
  <Icon>
    <path d="m12 3.75 8.25 4.25L12 12.25 3.75 8 12 3.75Z" />
    <path d="m3.75 12 8.25 4.25L20.25 12M3.75 16l8.25 4.25L20.25 16" />
  </Icon>
);

export const IconWeight = () => (
  <Icon>
    <circle cx="12" cy="6.25" r="2.25" />
    <path d="M7.25 9.5h9.5l2.5 10.75H4.75L7.25 9.5Z" />
  </Icon>
);

export const IconCost = () => (
  <Icon>
    <path d="M3.75 12.6V4.75a1 1 0 0 1 1-1h7.85l8.15 8.15a1 1 0 0 1 0 1.4l-7.45 7.45a1 1 0 0 1-1.4 0L3.75 12.6Z" />
    <circle cx="8.25" cy="8.25" r="1.5" />
  </Icon>
);

export const IconContainer = () => (
  <Icon>
    <path d="M2.75 6.75h18.5v10.5H2.75z" />
    <path d="M7 9.25v5.5M11 9.25v5.5M15 9.25v5.5M19 9.25v5.5" />
  </Icon>
);

// Importación: entra al almacén
export const IconImport = () => (
  <Icon>
    <path d="M12 3.75v10M8 10l4 4 4-4" />
    <path d="M4.75 15.5v3.75h14.5V15.5" />
  </Icon>
);

// Exportación: sale hacia el puerto
export const IconExport = () => (
  <Icon>
    <path d="M12 14V4M8 7.75l4-4 4 4" />
    <path d="M4.75 15.5v3.75h14.5V15.5" />
  </Icon>
);

// Báscula certificada (VGM)
export const IconScale = () => (
  <Icon>
    <path d="M12 3.75v15.5M7.5 19.25h9M5.25 6.75h13.5" />
    <path d="m5.25 6.75-2.5 6a2.5 2.5 0 0 0 5 0l-2.5-6ZM18.75 6.75l-2.5 6a2.5 2.5 0 0 0 5 0l-2.5-6Z" />
  </Icon>
);

export const IconWarehouse = () => (
  <Icon>
    <path d="M2.75 9 12 4.25 21.25 9v11H2.75V9Z" />
    <path d="M6.75 20v-7.25h10.5V20M6.75 16.25h10.5" />
  </Icon>
);

// Puerto: grúa sobre el muelle
export const IconPort = () => (
  <Icon>
    <path d="M5.75 20.25V4.75h12.5M5.75 8.25l3.5-3.5M16.25 4.75v4" />
    <path d="M14 8.75h4.5v3.75H14zM2.75 20.25h18.5" />
  </Icon>
);

// Plataforma abierta
export const IconFlatbed = () => (
  <Icon>
    <path d="M2.75 15.25h12.5M15.25 15.25V9.75h3.5l2.5 3v2.5h-6" />
    <circle cx="8.75" cy="11.25" r="3.25" />
    <circle cx="6" cy="18.25" r="1.75" />
    <circle cx="17.75" cy="18.25" r="1.75" />
  </Icon>
);

// Amarre y sujeción
export const IconStrap = () => (
  <Icon>
    <path d="M4.25 10.75h15.5v8.5H4.25z" />
    <path d="M9.5 19.25V6.75h5v12.5M11 4.75h2v2h-2z" />
  </Icon>
);

export const IconInventory = () => (
  <Icon>
    <path d="M8.75 4.25h6.5v2.5h-6.5z" />
    <path d="M15.25 5.5h2.5v14.75H6.25V5.5h2.5M9 11h6M9 14.5h6M9 18h3" />
  </Icon>
);

export const IconForklift = () => (
  <Icon>
    <path d="M3.75 17V8.75h5.5L12 13v4M12 13h-8.25M15.75 4.75V18.5h5" />
    <circle cx="6" cy="18.25" r="1.75" />
    <circle cx="11" cy="18.25" r="1.75" />
  </Icon>
);

// Redes sociales (relleno, 20px)
export function SocialIcon({
  name,
}: {
  name: "Facebook" | "Instagram" | "LinkedIn";
}) {
  const paths = {
    Facebook:
      "M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z",
    Instagram:
      "M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.8-8.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM12 4.6c2.4 0 2.7 0 3.6.1 2.4.1 3.6 1.3 3.7 3.7.1.9.1 1.2.1 3.6s0 2.7-.1 3.6c-.1 2.4-1.3 3.6-3.7 3.7-.9.1-1.2.1-3.6.1s-2.7 0-3.6-.1c-2.4-.1-3.6-1.3-3.7-3.7-.1-.9-.1-1.2-.1-3.6s0-2.7.1-3.6C4.8 6 6 4.8 8.4 4.7c.9-.1 1.2-.1 3.6-.1ZM12 3c-2.4 0-2.8 0-3.7.1C5 3.2 3.2 5 3.1 8.3 3 9.2 3 9.6 3 12s0 2.8.1 3.7c.1 3.3 1.9 5.1 5.2 5.2.9.1 1.3.1 3.7.1s2.8 0 3.7-.1c3.3-.1 5.1-1.9 5.2-5.2.1-.9.1-1.3.1-3.7s0-2.8-.1-3.7c-.1-3.3-1.9-5.1-5.2-5.2C14.8 3 14.4 3 12 3Z",
    LinkedIn:
      "M6.9 8.8H3.8V20h3.1V8.8ZM5.4 4a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM20.2 13.5c0-3-1.6-4.9-4.2-4.9-1.5 0-2.4.8-2.9 1.5V8.8H10V20h3.1v-5.7c0-1.5.5-2.8 2.1-2.8s1.9 1.4 1.9 2.9V20h3.1v-6.5Z",
  };
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
