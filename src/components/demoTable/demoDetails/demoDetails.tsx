"use client";
import React, { useState } from "react";
import styles from "./demoDetails.module.css";
import DemoTypes from "@/interfaces/demoTypes";
import DemoCard from "./demoCard/demoCard";

const DemoDetails = ({ demoData }: {demoData: DemoTypes[]}) => {
    const [selectedDemo, setSelectedDemo] = useState(demoData[0]);
    const handleDemoTypeClick = (demo: DemoTypes) => {
        setSelectedDemo(demo);
    };
    return (
        <div className={styles.demoDetails}>
            <div className={styles.demoTabs}>
                {demoData.map((demoType) => (
                    <button
                        key={demoType.id}
                        className={`${styles.demoTab} ${selectedDemo.id === demoType.id ? styles.active : ""}`}
                        onClick={() => handleDemoTypeClick(demoType)}
                    >
                        {demoType.description}
                    </button>
                ))}
            </div>
            <div className={styles.demoContent}>
                <DemoCard
                    key={selectedDemo.id}
                    demoData={selectedDemo.demoData}
                />
            </div>
        </div>
    );
}
export default DemoDetails;