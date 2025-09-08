import React from "react";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles.header}>
            <Link href="/">
                <Image
                    src="/logo.svg"
                    alt="Demo Next.js Logo"
                    width={620}
                    height={220}
                    aria-label="Demo Next.js Logo"
                    layout="responsive"
                    objectFit="contain"
                    priority={true}
                    loading={"eager"}
                    placeholder={"empty"}
                />
            </Link>
        </div>
    );
}

export default Header;