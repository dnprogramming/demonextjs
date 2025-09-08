import Image from "next/image";
import styles from "./hero.module.css";
import HeroProps from "@/interfaces/heroProps";

const Hero = ({hero}: { hero: HeroProps}) => {
    return (
        <>
            <Image 
                src={hero.source}
                alt={hero.alt}
                width={hero.width}
                height={hero.height}
                className={styles.heroImage}
                loading="eager"
                priority={true}
                placeholder="empty"
            />
            <div id={styles.hero}>
                <h1>{hero.ctaHeading}</h1>
                {hero.ctaDescription}
            </div>
        </>
    );
}

export default Hero;