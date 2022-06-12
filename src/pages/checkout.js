import { Grid,Box, Step, StepLabel, Stepper, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Confirmation from '../components/Confirmation'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import PersonalDetailsForm from '../components/PersonalDetailsForm'
import ShippingAdressDetails from '../components/ShippingAdressDetails'
import useStyles from '../Styles/checkoutStyles'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CheckoutCards from '../components/CheckoutCards'

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles()
  const match = useMediaQuery('(max-width:900px)')
  
  const steps = [
    {label:"Personal Details",component:<PersonalDetailsForm activeStep={activeStep} setActiveStep={setActiveStep} />},
    {label:"Shipping Adress",component:<ShippingAdressDetails activeStep={activeStep} setActiveStep={setActiveStep} />},
    {label:"Confirmation",component:<Confirmation activeStep={activeStep} setActiveStep={setActiveStep} />}
  ];
  return (
    <div className={classes.root}>
    <NavBar/>
    <Grid sx={{display:"flex",flexDirection:match ? "column-reverse" : "row"}} container spacing={3}>
      <Grid item xs={12} md={activeStep < steps?.length ? 6 : 12}>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
            {steps?.map((item) => {
              return (
                <Step key={item.label}>
                  <StepLabel className={classes.label}>{item.label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {
            activeStep === 0 ? steps[0].component : activeStep === 1 ? steps[1].component : activeStep === 2 && steps[2].component
          }
          {activeStep === steps?.length && (
            <>
              <Box className={classes.confirmation}>
              <Typography variant='h5'>
                Thank You! 
              </Typography>
              <DoneAllIcon sx={{fontSize:"100px"}} color='success'/>
              <Typography textAlign="center" variant='p'>Your Order Is In Process, Thanks For Your Purshase</Typography>
              </Box>
            </>
          )}
        </Box>
      </Grid>
      {
        activeStep < steps?.length && 
        <Grid item xs={12} md={6}>
          <CheckoutCards/>
        </Grid>
      }
    </Grid>
    <Footer/>
    </div>
  );
}

export default Checkout