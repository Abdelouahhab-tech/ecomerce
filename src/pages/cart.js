import React, { useEffect, useState, useContext } from 'react'
import { useTheme } from '@mui/material/styles'
import { Grid,Container, Typography, useMediaQuery, Button, Paper } from '@mui/material'
import NavBar from '../components/NavBar'
import SingleProductCart from '../components/singleProductCart'
import useStyles from '../Styles/cartProducts'
import { Link, useNavigate } from 'react-router-dom'
import MainContext from "../Contexts/MainContext"
import Footer from '../components/Footer'
const Cart = () => {
  
  const classes = useStyles()
  const match = useMediaQuery('(max-width:768px)')
  const theme = useTheme()
  const navigate = useNavigate()
  const [selectedProducts,setSelectedProducts] = useState([])
  const {setBadgeCount , setAuth, totalPrice, setTotalPrice} = useContext(MainContext)

  const getItems = ()=>{
    const selected = JSON.parse(localStorage.getItem('selectedProducts'))
    setSelectedProducts(selected)
    setBadgeCount(selected ? selected.length : 0)
    calcTotalPrice()
  }

  const removeProduct = (id) =>{
    const products = JSON.parse(localStorage.getItem('selectedProducts'))
    const newList = products.filter(product => product.id !== id)
    localStorage.setItem('selectedProducts',JSON.stringify(newList))
    setBadgeCount(newList ? newList.length : 0)
    setSelectedProducts(newList)
    calcTotalPrice()
  }

  const calcTotalPrice = ()=>{
    const products = JSON.parse(localStorage.getItem('selectedProducts'))
    let total = 0;
    products?.map(product => {
      total += (product.Qty * product.price)
    })
    setTotalPrice(total)
  }

  const handleCheckout = ()=>{
     setAuth(true)
     if(JSON.parse(localStorage.getItem('selectedProducts')) !== null){
       navigate('/checkout')
     }else{
       setBadgeCount(0)
       navigate("/ecomerce")
     }
  }

  useEffect(()=>{
      getItems()
  },[])
  return (
    <div style={{paddingTop:match ? "5px": theme.mixins.toolbar.minHeight + 50 + "px"}} className={classes.root}>
    <NavBar/>
    {
       selectedProducts?.length > 0 ? 
        <div>
        {
          !match && <Container className={classes.details}>
          <Typography variant='h6' gutterBottom><span className={classes.heading}>My Cart</span></Typography>
          <Grid container spacing={2}>
            <Grid sx={{textAlign:"center"}} item sm={8}>
              <Typography color="primary">Product Details</Typography>
            </Grid>
            <Grid sx={{marginLeft:"-5px !important"}} item sm={2}>
              <Typography color="primary">Product Price</Typography>
            </Grid>
            <Grid sx={{marginLeft:"-5px !important"}} item sm={2}>
              <Typography color="primary">Total</Typography>
            </Grid>
          </Grid>
          </Container>
        }
        <Container sx={{marginTop:match && theme.mixins.toolbar.minHeight + 80 +"px"}}>
          {
            selectedProducts?.map((product)=>(
              <SingleProductCart calcTotalPrice={calcTotalPrice} removeProduct={removeProduct} key={product.id} product={product}/>
            ))
          }
        </Container>
        <Container sx={{padding:match ? "0 20px" : "0 10px"}} className={classes.checkoutContainer}>
        <Paper sx={{width:match ? "100%" : "40%"}} className={classes.checkout}>
            <Typography variant='body2' color="primary">Total Price  : <span>${totalPrice.toFixed(2)}</span></Typography>
            <Button onClick={handleCheckout} variant='outlined'>Checkout</Button>
        </Paper>
        </Container>
        </div> : <div className={classes.empty}>
                  <Typography variant='body' component="div" gutterBottom>Your Cart Is Empty Try To Add Some Products</Typography>
                  <Link to="/Store"><Button sx={{color:"#fff",marginTop:"15px"}} variant='contained'>Shopping</Button></Link>
                </div>
      }
      <Footer/>
    </div>
  )
}

export default Cart