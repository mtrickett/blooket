import RightArrow from "../icons/right-arrow";
import Spinner from "../icons/spinner";
import styles from "./button.module.css";
import { titan } from "../../fonts";

type ButtonProps = {
  handleSubmit: React.MouseEventHandler;
  isLoading?: boolean;
  text?: string;
};

const Button = ({
  handleSubmit,
  isLoading = false,
  text = "Submit",
}: ButtonProps) => {
  return (
    <button
      className={styles.button}
      type="submit"
      onClick={handleSubmit}
      disabled={isLoading}
    >
      <div className={styles.shadow}></div>
      <div className={styles.edge}></div>
      <div className={styles.innerButton}>
        <div className={`${styles.buttonText} ${titan.className}`}>
          {text}{" "}
          {isLoading ? (
            <span className={styles.buttonIcon}>
              <Spinner />
            </span>
          ) : (
            <span className={styles.buttonIcon}>
              <RightArrow />
            </span>
          )}
        </div>
      </div>
    </button>
  );
};

export default Button;
