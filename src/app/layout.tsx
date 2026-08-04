import type {Metadata} from "next";
import {GeistSans} from 'geist/font/sans';
import {GeistMono} from 'geist/font/mono';
import {antonio, leagueSpartan} from "@/styles/fonts";
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
            className={`${GeistSans.className} ${GeistMono.className} ${antonio.variable} ${leagueSpartan.variable} min-h-full antialiased select-none`}
        >
        <body className=" flex flex-col relative bg-slate-900 overflow-hidden">
        <StarsBackground/>
        <Header/>
        {children}
        </body>
        </html>
    );
}