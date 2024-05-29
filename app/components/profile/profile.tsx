import DownArrow from "../icons/down-arrow";
import Image from "next/image";
import styles from "./profile.module.css";
import { user } from "../../constants/mock-data";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Image src={user.image} alt={user.blook} width={30} height={35} />
      <p>{user.name}</p>
      <DownArrow />
    </div>
  );
};

export default Profile;
