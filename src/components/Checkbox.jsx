import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormLabel } from '@mui/material';
import { useState } from 'react';

export default function CheckboxLabels() {

    const [skills , setSkills] = useState([]);
    function handleChange(event){
        const { checked, value } = event.target;
        setSkills((prevSkills)=>
            checked ? [...prevSkills , value]
            : prevSkills.filter(skill=>skill != value)
        )
    }
  return (
    <>  
        {console.log(skills)
        }
        <FormLabel id="demo-radio-buttons-group-label">Skills</FormLabel>
        <FormGroup>
            <FormControlLabel onChange={handleChange} control={<Checkbox value={"HTML"} />} label="HTML" />
            <FormControlLabel onChange={handleChange} control={<Checkbox value={"CSS"} />} label="CSS" />
            <FormControlLabel onChange={handleChange} control={<Checkbox value={"Javascript"} />} label="Javascript" />
        </FormGroup>
    </>
  );
}
