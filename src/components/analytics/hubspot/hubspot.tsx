import Script from "next/script";

const HubspotAnalytics = ({hsAnalytics}: {hsAnalytics: string}) => {
    return (
        <>
            <Script
                id="hs-script-loader"
                src={hsAnalytics}
                async={true}
                strategy="afterInteractive"
                defer={true}
            />
        </>
    );
};

export default HubspotAnalytics;