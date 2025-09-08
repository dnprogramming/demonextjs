import GallerySystem from "@/components/gallery/gallery";
import styles from "./page.module.css";
import GalleryContent from "@/content/gallery";

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <h1>Gallery</h1>
      <GallerySystem images={GalleryContent}/>
    </div>
  );
}
