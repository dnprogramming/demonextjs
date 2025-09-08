import styles from "./page.module.css";
import Hero from "@/components/hero/hero";
import Product from "@/components/product/product";
import HomeContent from "@/content/home";
import DemoTable from "@/components/demoTable/demoTable";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero hero={HomeContent.hero!}/>
        <hr />
        <Product />
        <hr />
        <DemoTable demoValues={HomeContent.demoData!}/>
      </main>
    </div>
  );
}
