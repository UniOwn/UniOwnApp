import React from "react";

import AppHeader from "@/components/AppHeader/AppHeader";

import { Providers } from "./providers";

import "../styles/global.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className="RootLayout_Wrapper">
                <Providers>
                    <AppHeader />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
