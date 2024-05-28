import DownArrow from "../icons/down-arrow";
import Image from "next/image";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Image
        src="https://ac.blooket.com/marketassets/blooks/goldfish.svg"
        alt="Goldfish Blook"
        width={30}
        height={35}
      />
      <p>cool_user_1234</p>
      <DownArrow />
    </div>
  );
};

export default Profile;
