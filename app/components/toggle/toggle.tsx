import styles from "./toggle.module.css";

const Toggle = ({ checked, handleToggle }) => {
  return (
    <div className={styles.toggle}>
      <input
        type="checkbox"
        name="private"
        value={`${checked}`}
        checked={checked}
        onChange={handleToggle}
      />
      <span></span>
    </div>
  );
};

export default Toggle;
