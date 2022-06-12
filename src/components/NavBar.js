import React, { useContext, useEffect } from 'react'
import {Box,AppBar,Toolbar,Typography, IconButton, Grid, useMediaQuery, Badge} from '@mui/material'
import {Link} from 'react-router-dom'
import useStyles from '../Styles/AppBar'
import {useLocation} from 'react-router-dom'
import NightlightIcon from '@mui/icons-material/Nightlight'
import LightModeIcon from '@mui/icons-material/LightMode'
import MainContext from '../Contexts/MainContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  const classes = useStyles()
  const location = useLocation()
  const match = useMediaQuery('(max-width:900px)')
  const {mode,setMode,badgeCount,setselectedProducts} = useContext(MainContext)

  useEffect(()=>{
    const selected = JSON.parse(localStorage.getItem('selectedProducts'))
    setselectedProducts(selected)
  },[])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={2} className={classes.appBar} position="fixed">
        <Toolbar>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={12}>
                  <Typography variant="h6" textAlign={match ? "center" : "left"} component="div">
                    <Link className={classes.link} to='/ecomerce'>Ecom<span className={classes.store}>Store</span></Link>
                  </Typography>
                </Grid>
                <Grid sx={{display:"flex",justifyContent:location.pathname === "/ecomerce" ? "flex-start" : "center"}} item xs={location.pathname === "/ecomerce" ? 10 : 12} md={location.pathname === "/ecomerce" ? 4 : 6} sm={location.pathname === "/ecomerce" ? 8 : 12}>
                  <Box>
                    <Link to='/ecomerce' className={location.pathname === "/ecomerce" ? `${classes.link} ${classes.btn} active` : `${classes.link} ${classes.btn}`}>Home</Link>
                    <Link to='/Store' className={location.pathname === "/Store" ? `${classes.link} ${classes.btn} active` : `${classes.link} ${classes.btn}`}>Store</Link>
                    <Link to='/cart' className={classes.link}>
                      <Badge className={classes.badge} badgeContent={badgeCount} color="primary">
                        <ShoppingCartIcon color="action" />
                      </Badge>
                    </Link>
                  </Box> 
                </Grid>
                {
                  location.pathname === "/ecomerce" && <Grid sx={{
                    display:"flex",
                    justifyContent:"flex-end",
                    alignItems:"center",
                    alignItems:"center"
                  }} item xs={2} md={2} sm={4}>
                    <IconButton
                    sx={{padding: "0",
                      paddingTop: "3px"}}
                    onClick={()=>{
                      setMode(!mode)
                      localStorage.setItem('mode',!mode)
                    }}
                    >
                      {
                        mode ? <LightModeIcon/> : <NightlightIcon/>
                      }
                    </IconButton>
                  </Grid>
                }
            </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar