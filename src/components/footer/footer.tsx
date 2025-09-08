import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div id={styles.footer}>
            <p>&copy;{currentYear} Demo Next.JS.<br/>All rights reserved.</p>
        </div>
    );
}

export default Footer;