/**
 * Préfixe un chemin par la base du site (ex. "/portfolio").
 *
 * `import.meta.env.BASE_URL` peut être "/portfolio" (sans slash final) ou "/".
 * Ce helper joint proprement la base et le chemin, quel que soit le cas, sans
 * produire de double slash ni de slash manquant.
 */
const base = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${b}${p}`;
}
