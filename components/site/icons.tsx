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
