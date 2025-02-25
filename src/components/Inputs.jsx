import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLarge from './InputLarge';
import { Grid } from '@mui/material';
import RadioButtonsGroup from './Radio';
import CheckboxLabels from './Checkbox';
import BasicButtons from './LoginBtn';
import BasicSelect from './dropDown';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;" , padding: "20px", borderRadius: "5px" }}
      noValidate
      autoComplete="off"
    >
      <h2 style={{textAlign: "center" , marginBottom: "30px"}}>Registration</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Username"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Email"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
            <TextField fullWidth id="filled-basic" label="Password" variant="filled" />
        </Grid>
      </Grid>

      <div style={{marginTop: "20px"}}>
      <BasicSelect></BasicSelect>
      </div> 
      <div style={{marginTop: "20px"}}>
        <RadioButtonsGroup></RadioButtonsGroup>
      </div> 
      <div style={{marginTop: "20px"}}>
      <CheckboxLabels></CheckboxLabels>
      </div> 
      <div style={{marginTop: "20px"}}>
      <BasicButtons></BasicButtons>
      </div> 
      

    </Box>
  );
}
