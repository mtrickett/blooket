const Dropdown = ({ name, value, options, onChange }) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      {options &&
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
};

export default Dropdown;
