import { NextResponse, type NextRequest } from "next/server";

// /design-system/ es una herramienta interna: pide usuario y contraseña (autenticación
// básica del navegador). La contraseña vive en el servidor, nunca en el repo:
//   DESIGN_SYSTEM_PASSWORD  (usuario: "human")
// Sin la variable, la página responde 404.
const USER = "human";

export function proxy(request: NextRequest) {
  const password = process.env.DESIGN_SYSTEM_PASSWORD;
  if (!password) {
    return new NextResponse("Not found", { status: 404 });
  }
  const auth = request.headers.get("authorization") ?? "";
  const [scheme, encoded] = auth.split(" ");
  if (scheme === "Basic" && encoded) {
    const [user, ...rest] = atob(encoded).split(":");
    if (user === USER && rest.join(":") === password) return NextResponse.next();
  }
  return new NextResponse("Acceso restringido", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="MM Carga design system", charset="UTF-8"' },
  });
}

export const config = {
  matcher: ["/design-system", "/design-system/:path*"],
};
