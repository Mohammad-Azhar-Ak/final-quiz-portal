import React from "react";
import {
  FormLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";

const RadioButtonComponent = ({
  handleChange,
  value,
  options,
  labelValue,
  formClassName,
  labelClassName,
}) => {
  const marginTop = { marginTop: 5 };
  return (
    <FormControl
      component="fieldset"
      style={marginTop}
      className={formClassName}
    >
      <FormLabel component="legend">{labelValue}</FormLabel>
      <RadioGroup
        aria-label="RadioButton"
        name="RadioButton"
        style={{ display: "initial" }}
        value={value || ""}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map((item, index) => (
          <FormControlLabel
            key={index}
            className={labelClassName}
            value={item.value}
            control={<Radio size="small" />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default RadioButtonComponent;
