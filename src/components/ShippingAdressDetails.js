import { Button, FormControl, Box, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography, ListItemIcon, ListItemText } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import useStyles from '../Styles/checkoutStyles'
import * as api from '../api/Api'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import FlagIcon from '@mui/icons-material/Flag';

const ShippingAdressDetails = ({setActiveStep,activeStep}) => {
    const classes = useStyles()
    const AdressLineOneRef = useRef(null)
    const countryRef = useRef(null)
    const codePostalRef = useRef(null)
    const [message,setMessage] = useState({
        AdressLineOneMessage:"",
        CodePostalMessage:"",
        CountryMessage:""
    })
    const [values,setValues] = useState({
        AdressLineOne:"",
        AdressLineTwo:"",
        CodePostal:"",
        Country:""
    })
    const [countries,setCountries] = useState([])

    const handleChange = e =>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
        if(name === "Country"){
            setMessage({
                ...message,
                CountryMessage:""
            })
        }
    }

    const handleNext = ()=>{
        const {AdressLineOne,CodePostal,Country} = values 
        if(AdressLineOne !== "" && CodePostal !== "" && Country !==""){
            setActiveStep(activeStep => activeStep + 1)
        }else{
            if(AdressLineOne === ""){
                setMessage({
                    ...message,
                    AdressLineOneMessage:"Adress Line 1 Is Required"
                })
                AdressLineOneRef.current.focus()
            }else if(CodePostal === ""){
                setMessage({
                    ...message,
                    CodePostalMessage:"Code Postal Is Required"
                })
                codePostalRef.current.focus()
            }else if(Country === ""){
                setMessage({
                    ...message,
                    CountryMessage:"Country Is Required"
                })
                countryRef.current.focus()
            }
        }
    }

    const getCountries = async()=>{
        const data = await api.fetchCountries()
        const countries = data.map(country=>{
            return country.name.common
        })

        const sorted = countries.sort()
        setCountries(sorted)
        
    }

    useEffect(()=>{
        getCountries()
    },[])

  return (
    <form className={classes.form}>
    <TextField
        label="Adress Line 1"
        name="AdressLineOne"
        inputRef={AdressLineOneRef}
        placeholder='Adress Line 1'
        variant='standard'
        autoComplete='off'
        autoFocus
        value={values.AdressLineOne}
        onChange={handleChange}
        onKeyDown={()=>setMessage({
            ...message,
            AdressLineOneMessage:""
        })}
        fullWidth
        helperText={<Typography color="error" variant='p' gutterBottom>{message.AdressLineOneMessage}</Typography>}
        className={classes.inputs}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
            endAdornment:(
                <InputAdornment position='end'>
                 <span>*</span>
                </InputAdornment>
            )
        }}
    />
    <TextField
        label="Adress Line 2"
        name="AdressLineTwo"
        placeholder='Adress Line 2'
        variant='standard'
        autoComplete='off'
        value={values.AdressLineTwo}
        onChange={handleChange}
        fullWidth
        className={classes.inputs}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
            endAdornment:(
                <InputAdornment position='end'>
                 <h6>Optional</h6>
                </InputAdornment>
            )
        }}
    />
    <TextField
        label="Code Postal"
        name="CodePostal"
        placeholder='Ex:90000'
        variant='standard'
        autoComplete='off'
        inputRef={codePostalRef}
        value={values.CodePostal}
        onChange={handleChange}
        onKeyDown={()=>setMessage({
            ...message,
            CodePostalMessage:""
        })}
        fullWidth
        helperText={<Typography color="error" variant='p' gutterBottom>{message.CodePostalMessage}</Typography>}
        type="number"
        className={classes.inputs}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MarkAsUnreadIcon />
              </InputAdornment>
            ),
            endAdornment:(
                <InputAdornment position='end'>
                 <span>*</span>
                </InputAdornment>
            )
        }}
    />
    <FormControl sx={{margin:"20px 0 !important"}} fullWidth className={`${classes.inputs} ${classes.last}`} variant="standard">
    <InputLabel id="demo-simple-select-standard-label">Countries</InputLabel>
    <FlagIcon sx={{bottom:message.CountryMessage === "" ? "8px" : "30px"}} className={classes.icon}/>
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      label="Countries"
      name="Country"
      value={values.Country}
      onChange={handleChange}
      inputRef={countryRef}
      onFocus={()=>{
        if(message.CountryMessage !== ""){
            setMessage({...message,CountryMessage:""})
        }
      }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {
          countries.length > 0 && countries.map((country,index)=>(
              <MenuItem key={index} value={country}>{country}</MenuItem>
          ))
      }
    </Select>
    <Typography color="error" variant='body'>{message.CountryMessage}</Typography>
    </FormControl>
    <Box className={classes.actions}>
    {
        activeStep > 0 && <Button
        onClick={()=>{
           activeStep > 0 && setActiveStep(activeStep => activeStep - 1)
       }} variant='outlined'>Back</Button>
    }
    <Button sx={{mx:activeStep === 0 && "auto",height:activeStep === 0 && "40px" ,width:activeStep === 0 && "150px"}} onClick={handleNext} variant='contained'>Next</Button>
    </Box>
    </form>
  )
}

export default ShippingAdressDetails