import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { MyLocation } from './MyLocation';
import  location from '../data/Location.json';
 
export default function Searchbox({setLocoid, position, setPosition, setProgress, progress}) {
         
  return (
    <>
    <div className="flex flex-wrap justify-evenly items-center  py-2 bg-gray-300">
    <Autocomplete
    className=''  
      disablePortal
      id="combo-box-demo"
      options={location}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Search your city.." />}
      getOptionLabel={(option) => (option ? option.city : "")}
      onChange={(e,v) => {
        if(v)
        setLocoid(v.id);  
        else
        setLocoid("")
      }}
     />   
    <MyLocation  position={position} setPosition={setPosition} progress={progress} setProgress={setProgress}/>
    </div>
    
    </>
  );
}


