import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ text='',onClick = ()=> {} }) => {
  return <MuiButton variant={'outlined'} onClick={onClick}>{text}</MuiButton>
};

export { Button };
