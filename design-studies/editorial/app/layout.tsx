import type { Metadata } from 'next';
import './globals.css';
import SiteShell from './site-shell';
export const metadata:Metadata={title:'Quincy Labs — Infrastructure for autonomous systems',description:'Quincy Labs researches and builds infrastructure for autonomous systems.',icons:{icon:"/favicon.svg"},robots:{index:false,follow:false}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>}
