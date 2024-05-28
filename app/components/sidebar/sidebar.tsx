import Hamburger from "../icons/hamburger";
import Image from "next/image";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Image
          src="https://ac.blooket.com/dashboard/assets/Blooket-M6jYh_hk.png"
          alt="Blooket logo"
          width="168"
          height="43"
        />
      </div>
      <span className={styles.hamburger}>
        <Hamburger />
      </span>
    </aside>
  );
};

export default Sidebar;
