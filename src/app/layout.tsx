import type {Metadata} from "next";
import {GeistSans} from 'geist/font/sans';
import {GeistMono} from 'geist/font/mono';
import "./globals.css";
import React from "react";
import StarsBackground from '@/components/layout/stars-background';
import Header from '@/components/layout/header';
export const metadata: Metadata = {
    title: "Base Project",
    description: "by William Bennett",
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <html
            lang="en"
            className={`${GeistSans.className} ${GeistMono.className} h-full antialiased select-none`}
        >
        <body className="min-h-full flex flex-col relative bg-slate-900 overflow-hidden">
        <StarsBackground/>
        <Header/>
        {children}
        </body>
        </html>
    );
}