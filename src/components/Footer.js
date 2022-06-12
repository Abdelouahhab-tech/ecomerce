import { Typography } from '@mui/material'
import React from 'react'
import useStyles from '../Styles/FooterStyles'

const Footer = () => {
    const classes = useStyles()
  return (
    <div className={classes.root}>
    <Typography variant='p'>All Rights Reserved &copy; | 2022 Ecom<span className={classes.name}>Store</span></Typography>
    </div>

  )
}

export default Footer