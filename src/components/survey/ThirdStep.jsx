import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const ThirdStep = () => {
  const [animal, setAnimal] = useState("");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Jakigo zwierzaka chcesz adoptować?</InputLabel>
      <Select value={animal} onChange={handleColorChange}>
        <MenuItem value="dog">Pies</MenuItem>
        <MenuItem value="cat">Kot</MenuItem>
        <MenuItem value="trashpanda">Szop</MenuItem>
        <MenuItem value="hedge">Jeż</MenuItem>
        <MenuItem value="other">Inne</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ThirdStep;
