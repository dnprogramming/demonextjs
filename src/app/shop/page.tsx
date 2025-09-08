import Image from "next/image";
import styles from "./page.module.css";

const Shop = () => {
    return (
        <div className={styles.shop}>
            <div className={styles.shopImage}>
                <Image
                    src="/images/hero_banner.png"
                    alt="Next.JS Banner"
                    width={1920}
                    height={1080}
                    />
            </div>
            <h1></h1>
            <p>
            </p>
        </div>
    );
};

export default Shop;