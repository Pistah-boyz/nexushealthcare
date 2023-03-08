import React from "react";
import { FormControl, TextField as MuiTextField } from "@mui/material";

const styles = {
    formControl:{
        marginBottom:'16px'
    }
}

const Input = ({ inputProps={},name = '',label = '',value = '',onChange = ()=> {} }) => {
  return (<FormControl sx={styles.formControl} fullWidth>
    <MuiTextField name={name} label={label}  variant={'outlined'} value={value} onChange={onChange} inputProps={inputProps} />
    </FormControl>)
};

export { Input };
