import React from "react";
import styles from "./page.module.css";
import AboutContent from "@/content/about";

const About = () => {
    return (
        <div className={styles.about}>
            <h1>
                {AboutContent.aboutMeHeader}
            </h1>
            <hr />
            <h2>
                {AboutContent.aboutMeSubHeader}
            </h2>
            <span>
                {AboutContent.aboutMeSection}
            </span>
            <hr />
            <h3>
                {AboutContent.demoHeader}
            </h3>
            <span>
                {AboutContent.demoSection}
            </span>
        </div>
    );
};

export default About;