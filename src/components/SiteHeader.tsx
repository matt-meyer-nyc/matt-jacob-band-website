import Link from "next/link";

const links = [
  ["Home", "/"],
  ["Shows", "/shows"],
  ["EPK", "/epk"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  return <header className="site-header"><Link className="wordmark" href="/">MATT JACOB BAND</Link><nav aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<a href="https://mattjacobband.com/shop/">Shop ↗</a></nav></header>;
}
