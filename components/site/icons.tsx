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
