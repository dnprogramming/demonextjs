"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.hamburger} onClick={toggleMenu}>
                ☰
            </div>
            <div className={`${styles.linksContainer} ${isOpen ? styles.open : ""}`}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/fundraisers">Fundraisers</Link>
                <Link href="/shop">Shop</Link>
            </div>
        </div>
    );
}

export default Navbar;