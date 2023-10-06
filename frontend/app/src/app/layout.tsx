import React from "react";

// import RootProvider from "@/provide/rs/root/rootProvider";

import "../styles/global.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className="RootLayout_Wrapper">{children}</body>
        </html>
    );
}
