import { Container, Paper, Typography } from '@mui/material'
import React, { useState, useEffect, useContext } from 'react'
import MainContext from '../Contexts/MainContext'
import useStyles from '../Styles/checkoutStyles'
import CheckoutCard from './CheckoutCard'

const CheckoutCards = () => {
    const [products,setProducts] = useState([])
    const {totalPrice} = useContext(MainContext)
    const classes = useStyles()
    
    const getProducts = ()=>{
        const data = JSON.parse(localStorage.getItem('selectedProducts'))
        if(data !== null)
          setProducts(data)
    }

    useEffect(()=>{
       getProducts()
    },[])

  return (
    <Container>
    {
        products?.map((product) =>(
            <CheckoutCard key={product.id} product={product} />
        ))
    }
    {
        products && <Paper elevation={3} className={classes.total}>
                        <Typography variant='subtitle' gutterBottom>Total Price</Typography>
                        <Typography variant='subtitle' gutterBottom>{totalPrice.toFixed(2)} $</Typography>
                    </Paper>
    }
    </Container>
  )
}

export default CheckoutCards