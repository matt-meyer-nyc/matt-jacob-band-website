import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const media = "https://mattjacobband.com/wp-content/uploads";

export default function Home() {
  return <><SiteHeader/><main>
    <section className="hero home-hero" style={{ backgroundImage: `linear-gradient(90deg,rgba(14,12,11,.82),rgba(14,12,11,.2)),url(${media}/2024/08/IMG_6516-scaled-e1724009140501.jpg)` }}>
      <p className="eyebrow">New York · Rock · Soul · Psychedelia</p><h1>Matt Jacob<br/>Band</h1><p className="hero-copy">A psychedelic groove with a voice that stays with you.</p><div className="actions"><Link className="button" href="/shows">See upcoming shows</Link><a className="button button-quiet" href="https://open.spotify.com/artist/2qZVtJ3uhOAK3I16RWgOAt">Listen now ↗</a></div>
    </section>
    <section className="section split"><div><p className="eyebrow">The band</p><h2>A sound built for the room</h2><p>Matt Jacob is a singer-songwriter with a husky voice and psychedelic groove. The band brings together rock, soul, Motown, and jam-band spirit for a set that keeps moving.</p><p>Matt Jacob (vocals), Sean Decker (bass), Jack Riley (keys), and Jared Decker (drums).</p><Link className="text-link" href="/epk">Read the EPK →</Link></div><Image className="feature-image" src={`${media}/2024/08/band_photo_1-min.png`} alt="Matt Jacob Band" width={1200} height={900}/></section>
    <section className="section music"><p className="eyebrow">Listen and watch</p><h2>From the stage to your speakers</h2><div className="video-grid"><iframe title="Matt Jacob Band live performance" src="https://player.vimeo.com/video/1051396902" allow="autoplay; fullscreen; picture-in-picture"/><iframe title="Matt Jacob Band performance" src="https://player.vimeo.com/video/999752132" allow="autoplay; fullscreen; picture-in-picture"/></div><a className="text-link" href="https://distrokid.com/hyperfollow/mattjacob/hold-on-feat-the-matt-jacob-band">Hear “Hold On” on your favorite platform ↗</a></section>
    <section className="section next-show"><p className="eyebrow">Come see us</p><h2>Good music is better together.</h2><Link className="button" href="/shows">Shows &amp; appearances</Link></section>
  </main><SiteFooter/></>;
}
