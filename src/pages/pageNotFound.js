import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom"
import useStyles from '../Styles/pageNotFoundStyles'
import ErrorImage from '../images/404.png'
import ErrorImageLight from '../images/404Light.jpg'

const PageNotFound = () => {
    const theme = useTheme()
    const classes = useStyles()
  return (
    <Box className={classes.root}>
       <img src={theme.palette.mode === "dark" ? ErrorImage : ErrorImageLight} alt="Error Image" />
       <Link to="/ecomerce">Go Home</Link>
    </Box>
  )
}

export default PageNotFound