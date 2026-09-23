import type { Metadata } from 'next';
import './globals.css';
import './editorial-fonts.css';
import './editorial.css';
import SiteShell from './site-shell';
export const metadata: Metadata = {title: 'Quincy Labs — Infrastructure for autonomous systems', description: 'AI Infrastructure Lab for Autonomous Agents', icons: {icon: '/quincy-logo.svg'}};
export default function RootLayout({children}: {children: React.ReactNode}) { return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>; }
