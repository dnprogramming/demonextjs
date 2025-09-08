import React from "react";
import Script from "next/script";

const HubspotChat = ({hubspot}: {hubspot: string}) => {
    return (
        <Script
            id="hubspot-chat"
            src={hubspot}
            async={true}
            defer={true}
            strategy="afterInteractive"
            />
    );
};

export default HubspotChat;