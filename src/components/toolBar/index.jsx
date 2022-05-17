import {
  Input,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  Typography,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import "./index.less";

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="#000"
      d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
    />
  </svg>
);

export default function ToolBar(props) {
  const {
    keyWord,
    handleKeyWordChange,
    categoryVal,
    handleSelectorChange,
    options,
  } = props;

  return (
    <Box className="toolbar-wrapper">
      <Typography component="div" className="input-wrapper">
        <OutlinedInput
          type="text"
          placeholder="Search"
          value={keyWord}
          onChange={handleKeyWordChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton disableRipple disabled edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </Typography>

      <Typography component="div" className="selector-wrapper">
        <Select
          displayEmpty
          defaultValue={options[0].value}
          value={categoryVal.value}
          onChange={handleSelectorChange}
          input={<OutlinedInput />}
          placeholder="Category"
        >
          {options.map(v => (
            <MenuItem value={v.value} key={v.label}>
              {v.label}
            </MenuItem>
          ))}
        </Select>
      </Typography>
    </Box>
  );
}
