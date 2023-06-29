import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import "@/styles/global.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>UniOwn</title>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta
                    name="description"
                    content="UniOwn: Empowering Fractional NFT Ownership on a Thriving Marketplace - Join the GameFi and NFT Revolution."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className="RootLayout-Wrapper">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
