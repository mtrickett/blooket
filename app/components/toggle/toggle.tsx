import styles from "./toggle.module.css";

type ToggleProps = {
  checked: boolean;
  handleToggle: React.ChangeEventHandler;
};

const Toggle = ({ checked, handleToggle }: ToggleProps) => {
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
