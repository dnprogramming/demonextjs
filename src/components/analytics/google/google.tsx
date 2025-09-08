import { GoogleAnalytics } from '@next/third-parties/google';

const Google = ({gaCode}: {gaCode: string}) => {
    return (
        <GoogleAnalytics gaId={gaCode} />
    );
}
export default Google;