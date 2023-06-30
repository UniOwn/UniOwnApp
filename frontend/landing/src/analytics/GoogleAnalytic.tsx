import Script from "next/script";

interface IGoogleAnalyticProps {
    measurementId: string | undefined;
}

const GoogleAnalytic = ({ measurementId }: IGoogleAnalyticProps) => {
    return (
        <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
            <Script id="uniown-ga">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${measurementId}');
                `}
            </Script>
        </>
    );
};

export default GoogleAnalytic;
