const Dropdown = ({ name, value, options, onChange, isLoading = false }) => {
  return (
    <select name={name} value={value} onChange={onChange} disabled={isLoading}>
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
