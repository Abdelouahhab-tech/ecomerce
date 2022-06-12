import { Grid, Paper, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import useStyles from '../Styles/CardCheckoutStyles'

const CheckoutCard = ({product}) => {
    const {image,title,Qty,price} = product
    const classes = useStyles()
    const match = useMediaQuery('(max-width:900px)')
  return (
    <Paper sx={{mt:1,p:match ? 2 : 0}} elevation={2}>
    <Grid spacing={match ? 2 : 0} sx={{justifyContent:match ? "center" : "space-between"}} className={classes.container} container>
        <Grid className={classes.imageContainer} sx={{justifyContent:match ? "center" : "space-between"}} item xs={12} sm={4}>
          <img style={{borderRadius:match ? "10px" : "0"}} className={classes.image} src={image} alt={title} />
        </Grid>
        <Grid item xs={8} sm={6}>
        <Typography variant='body'>{title}</Typography>
        </Grid>
        <Grid item xs={4} sm={2}>
           <Typography variant='subtitle2'>{Qty} x {price} $</Typography>
        </Grid>
    </Grid>
</Paper>
  )
}

export default CheckoutCard