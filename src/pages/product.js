import React, { useContext, useEffect, useState } from 'react'
import {Grid,Paper,Button,Typography, Container, Rating, CircularProgress, useMediaQuery, Snackbar, Alert} from '@mui/material'
import { Link, useNavigate, useParams } from 'react-router-dom'
import * as api from '../api/Api'
import useStyles from '../Styles/SingleProductStyle'
import NavBar from '../components/NavBar'
import MainContext from '../Contexts/MainContext'
import Footer from '../components/Footer'

const Product = () => {
  const classes = useStyles()
  const {id} = useParams()
  const [rate,setRate] = useState(0)
  const [open,setOpen] = useState(false)
  const [product,setProduct] = useState({})
  const [value,setValue] = useState(0)
  const match = useMediaQuery("(max-width:500px)")
  const {setBadgeCount} = useContext(MainContext)
  const navigate = useNavigate()

  const fetchSingleProduct = async() =>{
    const data = await api.fetchSingleProduct(id)
    setProduct(data)
    data?.title && setRate(Math.floor(data?.rating.rate))
  }

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      setOpen(false);
      return;
    }
    setOpen(false);
  };

  const increase = ()=>{
      setValue(value => value + 1)
  }

  const decrease = ()=>{
    if(value > 0){
      setValue(value => value - 1)
    }else{
      setValue(0)
    }
}

const addToCart = () =>{
  if(value > 0){
      if(localStorage.getItem('selectedProducts')){
         if(JSON.parse(localStorage.getItem('selectedProducts')).length > 0){
          const selected = JSON.parse(localStorage.getItem('selectedProducts'))
          const isExist = selected?.find(product => product.id.toString() === id)
          if(isExist){
            navigate('/Store')
          }else{
            const newSelectedProduct = {...product,Qty:value,total:value * product.price}
            const newList = [...selected,newSelectedProduct]
            localStorage.setItem('selectedProducts',JSON.stringify(newList))
            setBadgeCount(newList ? newList.length : 0)
            navigate('/Store')
          }
         }else{
          const newSelectedProduct = {...product,Qty:value,total:value * product.price}
          const newList = [newSelectedProduct]
          localStorage.setItem('selectedProducts',JSON.stringify(newList))
          setBadgeCount(newList ? newList.length : 0)
          navigate('/Store')
         }
      }else{
        const newSelectedProduct = {...product,Qty:value,total:value * product.price}
        const newList = [newSelectedProduct]
        localStorage.setItem('selectedProducts',JSON.stringify(newList))
        setBadgeCount(newList ? newList.length : 0)
        navigate('/Store')
      }
  }else{  
    setOpen(true)
  }
}

  useEffect(()=>{
    fetchSingleProduct()
  },[])

  return (
    <div className={classes.root}>
      <NavBar/>
      {
        product?.title ? <Container className={classes.container}>
        <Typography variant='h6' gutterBottom><span className={classes.heading}>My Product</span></Typography>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Please Select The Quantity !
          </Alert>
        </Snackbar>
        <Grid spacing={2} container>
          <Grid sx={{display:"flex",justifyContent:"center"}} item xs={12} sm={6}>
            <div style={{width:match ? "250px" : "350px",height:match ? "250px" : "350px"}} className={classes.box}>
                <img src={product.image} alt={product.title} className={classes.media} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>
                    <Typography className={classes.title} variant="body" component="div" gutterBottom>{product?.title}</Typography>
                    <Typography className={classes.title} variant="body2" component="div" gutterBottom>{product?.category}</Typography>
                    <Rating  name="read-only" value={rate} readOnly />
                    <br/>
                    <Typography className={classes.oldPrice} component="span" variant='subtitle2' gutterBottom>{product?.price * 3}$</Typography>
                    <Typography className={classes.newPrice} component="span" variant='subtitle2' gutterBottom>{product?.price}$</Typography>
                    <br/>
                    <label>Quantity</label>
                    <div style={{width:match ? "100%" : "50%"}} className={classes.Qty}>
                      <span onClick={decrease}>-</span>
                      <input value={value} readOnly type="text" name="Qty"/>
                      <span onClick={increase}>+</span>
                    </div>
                    <label>Description</label>
                    <Typography variant='body2'sx={{marginTop:"10px"}} component='div' gutterBottom>{product?.description}</Typography>
                    <Button onClick={addToCart} className={classes.btn} variant="contained" fullWidth>Add To Cart</Button>
              </Paper>
          </Grid>
        </Grid>
    </Container> :  product?.message ? <div className={classes.message}>
                                         <Typography gutterBottom variant='h6'>{product?.message}</Typography>
                                         <Link to='/ecomerce'>Shop Again</Link>
                                      </div> : 
                                      <div className={classes.parent}>
                                          <CircularProgress sx={{alignSelf:"center"}}/>
                                      </div>
      }
      <Footer/>
    </div>
  )
}

export default Product