import styles from "./page.module.css";
import FundraiserContent from "@/content/fundraiser";

const Fundraiser = () => {
    return (
        <div className={styles.fundraiser}>
            <h1>Fundraiser</h1>
            <div>
                {FundraiserContent.map((fundraiser, index) => (
                    <p key={index}>
                        {fundraiser}
                        <br />
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Fundraiser;