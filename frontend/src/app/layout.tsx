import React from "react";

import "../styles/global.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <main className="RootLayout_Wrapper">{children}</main>
        </html>
    );
}
