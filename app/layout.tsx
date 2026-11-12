import './globals.css';
import type {Metadata} from 'next';
import {config} from '@/lib/config';
export const metadata:Metadata={title:`${config.name} | ${config.tag}`,description:config.subtitle,robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
