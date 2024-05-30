import Upload from "../icons/upload";
import styles from "./image-uploader.module.css";

const ImageUploader = () => {
  return (
    <div className={styles.container}>
      Cover Image
      {/* <Upload /> */}
      <p>Drag and Drop or</p>
      <button className={styles.button} type="button">
        Image gallery
      </button>
      <button className={styles.button} type="button">
        Upload a file
      </button>
      <button className={styles.button} type="button">
        Upload by URL
      </button>
    </div>
  );
};

export default ImageUploader;
