'use client';
import { usePathname } from 'next/navigation';
import ReishiBackground from './reishi-background';
import { Footer } from './shared';
const links=[['Labs','/labs'],['Research','/research'],['Insights','/insights'],['Ventures','/ventures'],['About','/about']];
export default function SiteShell({children}:{children:React.ReactNode}){
 const pathname=usePathname();
 return <><ReishiBackground/><div className="concept editorial" id="top"><a className="skip-link" href="#main-content">Skip to content</a><header className="site-header"><a className="brand" href="/" aria-label="Quincy Labs home"><img src="/quincy-logo.svg" alt="" width="38" height="38"/>Quincy Labs</a><nav aria-label="Main navigation">{links.map(([label,href])=><a key={href} href={href} aria-current={pathname===href||pathname.startsWith(href+'/')?'page':undefined}>{label}</a>)}</nav><a className="contact-link" href="/contact" aria-current={pathname==='/contact'?'page':undefined}>Let’s talk <span aria-hidden="true">↗</span></a></header>{children}<Footer/></div></>
}
