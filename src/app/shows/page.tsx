import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = { title: "Shows | Matt Jacob Band", description: "Upcoming live shows from the Matt Jacob Band." };

export default function Shows() {
  return <><SiteHeader/><main className="inner-page"><p className="eyebrow">Live music</p><h1>Shows</h1><p className="lead">Come catch the band live.</p><article className="show-card"><div><p className="eyebrow">Latest listing on the current site</p><h2>Crossroads</h2><p>Garwood, New Jersey · November 1 (year not listed)</p></div></article><p className="muted">For current dates and booking inquiries, <a href="mailto:mattjacobband@gmail.com">get in touch</a>.</p></main><SiteFooter/></>;
}
