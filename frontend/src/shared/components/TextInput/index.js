import { TextField } from "@mui/material";

const CustomTextField = ({
  label,
  type,
  handleChange,
  value,
  error,
  helperText,
  placeholder,
  flag,
}) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      placeholder={placeholder}
      label={label}
      type={type}
      value={value || ""}
      error={error}
      helperText={helperText}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
export default CustomTextField;
