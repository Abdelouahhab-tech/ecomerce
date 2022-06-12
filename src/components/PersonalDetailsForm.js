import { Button, InputAdornment, Box, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import useStyles from '../Styles/checkoutStyles'
import { AccountCircle, PhoneAndroid } from '@mui/icons-material'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const PersonalDtailsForm = ({setActiveStep,activeStep}) => {
    const classes = useStyles()
    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const phoneNumberRef = useRef(null)
    const emailRef = useRef(null)
    const [message,setMessage] = useState({
        firstNameMessage:"",
        lastNameMessage:"",
        phoneNumberMessage:"",
        emailMessage:""
    })
    const [values,setValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:""
    })

    const handleChange = e =>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      }

    const handleNext = ()=>{
        const {firstName,lastName,phoneNumber,email} = values
        if(firstName !== "" && lastName !== "" && phoneNumber !== ""){
              if(email === "")
              setActiveStep(activeStep => activeStep +1)
              else{
                  if(validateEmail(email)){
                      setActiveStep(activeStep => activeStep +1)       
                }else{
                    setMessage({
                        ...message,
                        emailMessage:"Invalid Email Adress"
                    })
                    emailRef.current.focus()
                    return
                }
              }
        }else{
            if(firstName === ""){
               setMessage({
                   ...message,
                   firstNameMessage:"First Name Is Required"
               })
               firstNameRef.current.focus()
            }else if(lastName === ""){
                setMessage({
                    ...message,
                    lastNameMessage:"Last Name Is Required"
                })
                lastNameRef.current.focus()
            }else if(phoneNumber === ""){
                setMessage({
                    ...message,
                    phoneNumberMessage:"Phone Number Is Required"
                })
                phoneNumberRef.current.focus()
            }
        }
    }

  return (
    <form className={classes.form}>
    <TextField
        label="First Name"
        name="firstName"
        inputRef={firstNameRef}
        placeholder='First Name'
        autoComplete='off'
        autoFocus
        variant='standard'
        value={values.firstName}
        onChange={handleChange}
        onKeyDown={()=>setMessage({
            ...message,
            firstNameMessage:""
        })}
        fullWidth
        helperText={<Typography color="error" variant='p' gutterBottom>{message.firstNameMessage}</Typography>}
        className={classes.inputs}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
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
        label="Last Name"
        name="lastName"
        placeholder='Last Name'
        autoComplete='off'
        inputRef={lastNameRef}
        variant='standard'
        value={values.lastName}
        onChange={handleChange}
        onKeyDown={()=>setMessage({
            ...message,
            lastNameMessage:""
        })}
        fullWidth
        helperText={<Typography color="error" variant='p' gutterBottom>{message.lastNameMessage}</Typography>}
        className={classes.inputs}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
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
        label="Email"
        name="email"
        placeholder='Ex: JhonDoa@gmail.com'
        variant='standard'
        autoComplete='off'
        value={values.email}
        inputRef={emailRef}
        onKeyDown={()=>setMessage({
            ...message,
            emailMessage:""
        })}
        onChange={handleChange}
        fullWidth
        helperText={<Typography color="error" variant='p' gutterBottom>{message.emailMessage}</Typography>}
        type="email"
        className={classes.inputs}
        InputProps={{
            startAdornment: (
            <InputAdornment position="start">
                <AlternateEmailIcon />
            </InputAdornment>
            ),
            endAdornment:(
                <InputAdornment position='end'>
                 <h5>Optional</h5>
                </InputAdornment>
            )
        }}
    />
    <TextField
        label="Phone Number"
        name="phoneNumber"
        placeholder='Ex:+212 06 12 45 87 96'
        variant='standard'
        autoComplete='off'
        inputRef={phoneNumberRef}
        value={values.phoneNumber}
        onChange={handleChange}
        onKeyDown={()=>setMessage({
            ...message,
            phoneNumberMessage:""
        })}
        fullWidth
        helperText={<Typography color="error" variant='p' gutterBottom>{message.phoneNumberMessage}</Typography>}
        type="number"
        className={classes.inputs}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneIcon />
              </InputAdornment>
            ),
            endAdornment:(
                <InputAdornment position='end'>
                 <span>*</span>
                </InputAdornment>
            )
        }}
    />
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

export default PersonalDtailsForm