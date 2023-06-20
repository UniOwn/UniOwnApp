import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import "../styles/global.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>UniOwn</title>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className="RootLayout-Wrapper">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
