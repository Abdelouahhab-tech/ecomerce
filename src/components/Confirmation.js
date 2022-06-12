import { Box, Button, Checkbox, Container, Typography } from '@mui/material'
import React,{useState, useContext} from 'react'
import MainContext from '../Contexts/MainContext'
import useStyles from '../Styles/ConfirmationStyles'

const Confirmation = ({setActiveStep}) => {
    const classes = useStyles()
    const [value,setValue] = useState(false)
    const [message,setMessage] = useState("")
    const {setBadgeCount} = useContext(MainContext)

    const handleChange = e =>{
        setValue(e.target.checked)
        setMessage("")
    }

    const Confirm = () =>{
        if(value){
            setActiveStep(activeStep => activeStep + 1)
            localStorage.removeItem('selectedProducts')
            setBadgeCount(0)
        }else{
            setMessage("Please Check The Privacy Policy")
        }
    }

  return (
    <Container sx={{marginTop:"100px"}}>
        <Box className={classes.root}>
            <Checkbox
            id="check"
            value={value}
            onChange={handleChange}
            />
            <label htmlFor="check">I accept The Terms and Conditions and the processing and transfer Of my personal data in accordance with the Privacy Policy
            </label>
        </Box>
        {
            message !== "" && <Box className={classes.btn}><Typography variant='p' color="error">{message}</Typography></Box>
        }
        <Box className={classes.btn}>
        <Button onClick={Confirm} variant='contained'>Confirm</Button>
        </Box>
    </Container>
  )
}

export default Confirmation