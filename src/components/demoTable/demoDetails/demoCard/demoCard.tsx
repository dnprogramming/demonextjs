import React from "react";
import styles from "./demoCard.module.css";
import DemoDescription from "@/interfaces/demoDescription";

const DemoCard = ({ demoData }: {demoData: DemoDescription[]}) => {
    return (
        <>
            <div className={styles.demoGrid}>
                {demoData.map((demo) => (
                    demo.active && (
                        <div key={demo.title} className={styles.demoCard}>
                            <h2>
                                {demo.title}
                                {demo.newDemoDescription && <span>*</span>}
                            </h2>
                            <p>{demo.description}</p>
                        </div>
                    )
                ))}
            </div>
            <div className={styles.demoCardNotation}>
                <p>
                    <span>*</span> denotes New Demo Description!
                </p>
            </div>
        </>
    );

}
export default DemoCard;