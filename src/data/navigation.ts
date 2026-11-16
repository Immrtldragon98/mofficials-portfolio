export const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/roadmap" },
  { name: "Contact", href: "/contact" },
];

export function isActiveRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
