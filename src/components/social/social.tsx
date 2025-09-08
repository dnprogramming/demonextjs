import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./social.module.css";
import SocialProps from "@/interfaces/socialProps";

const Social = ({socials}: {socials: SocialProps[]}) => {
    return (
        <div className={styles.social}>
            {socials?.map((social, index) => (
                <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={social.image.src}
                        alt={social.image.alt}
                        width={48}
                        height={48}
                        />
                </Link>
            ))}
        </div>
    );
}

export default Social;