import React from "react";

import Header from "@/components/Header/Header";
// import RootProvider from "@/providers/root/rootProvider";

import "../styles/global.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className="RootLayout_Wrapper">
                <Header />
                {children}
            </body>
        </html>
    );
}
