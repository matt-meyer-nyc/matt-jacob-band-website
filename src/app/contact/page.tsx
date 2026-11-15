import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata = { title: "Contact | Matt Jacob Band", description: "Contact Matt Jacob Band for bookings and band news." };

export default function Contact() {
  return <><SiteHeader/><main className="inner-page contact-page"><p className="eyebrow">Say hello</p><h1>Contact</h1><p className="lead">For booking, press, and other inquiries, email us.</p><a className="button" href="mailto:mattjacobband@gmail.com">mattjacobband@gmail.com</a><section className="newsletter"><h2>Join our mailing list</h2><p>Get band news and updates in your inbox.</p><a className="text-link" href="https://mattjacobmusic.us5.list-manage.com/subscribe/post?u=a6da6d0ead57e3bdad921fa76&id=45ee2cf421">Sign up for updates ↗</a></section></main><SiteFooter/></>;
}
