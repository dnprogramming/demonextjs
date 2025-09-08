import Google from "./google/google";
import HubspotAnalytics from "./hubspot/hubspot";
import VercelAnalytics from "./vercel/vercel";

const Analytics = () => {
    return (
        <>
            <Google gaCode=""/>
            <HubspotAnalytics hsAnalytics=""/>
            <VercelAnalytics />
        </>
    );
}
export default Analytics;