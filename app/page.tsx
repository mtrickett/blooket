import Sidebar from "./components/sidebar/sidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
    </main>
  );
}
