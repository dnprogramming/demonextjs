import DemoTypes from "@/interfaces/demoTypes";
import styles from "./demoTable.module.css";
import DemoDetails from "./demoDetails/demoDetails";

const DemoTable = ({demoValues}: {demoValues: DemoTypes[]}) => {
    return (
        <div id={styles.demoTablesHeader}>
            <h2>Our Demo Tables</h2>
            <DemoDetails demoData={demoValues}/>
        </div>
    );
}

export default DemoTable;