import { useState } from 'react'
import { Button, Grid, Paper, Typography, useMediaQuery } from '@mui/material'
import useStyles from '../Styles/cartProducts'

const SingleProductCart = ({product,calcTotalPrice,removeProduct}) => {

    let {id,title,image,category,price} = product
    const filteredProduct = JSON.parse(localStorage.getItem('selectedProducts')).filter(product => product.id === id)
    const Qty = filteredProduct[0]?.Qty
    const match = useMediaQuery('(max-width:650px)')
    const classes = useStyles()
    const [showQty,setShowQty] = useState(false)
    const [value,setValue] = useState(Qty)
    const [total,setTotal] = useState(Qty * price)
    const [qty,setQty] = useState(Qty)

    const setItemToLocalStorage = ()=>{
        const products = JSON.parse(localStorage.getItem('selectedProducts'))
        const newProduct = products?.filter(product => product.id === id)
        const updatedProducts = products?.filter(product => product.id !== id)
        const Products = [...updatedProducts,{...newProduct[0],Qty:newProduct[0]?.Qty + 1,total:newProduct[0]?.total + price}]
        localStorage.setItem('selectedProducts',JSON.stringify(Products))
        calcTotalPrice()
    }

    const removeItemFromLocalStorage = ()=>{
        const products = JSON.parse(localStorage.getItem('selectedProducts'))
        const newProduct = products?.filter(product => product.id === id)
        const updatedProducts = products?.filter(product => product.id !== id)
        const Products = [...updatedProducts,{...newProduct[0],Qty:newProduct[0]?.Qty - 1,total:newProduct[0]?.total - price}]
        localStorage.setItem('selectedProducts',JSON.stringify(Products))
        calcTotalPrice()
    }

    const increase = ()=>{
        setValue(value => value + 1)
        setTotal(total => total + price)
        setQty(qty => qty + 1)
        setItemToLocalStorage()
    }

    const decrease = ()=>{
      if(value > 1){
        setValue(value => value - 1)
        setTotal(total => total - price)
        setQty(qty => qty - 1)
        removeItemFromLocalStorage()
      }
    }

    const editQuantity = ()=>{
        setShowQty(true)
    }

  return (
    <Paper sx={{mt:4}} elevation={2}>
        <Grid sx={{textAlign:match ? "center" : "left",padding:"15px 10px"}} container spacing={2}>
            <Grid className={classes.imageContainer} item xs={12} sm={4}>
              <img className={classes.image} src={image} alt={title} />
            </Grid>
            <Grid className={classes.productDetails} item xs={12} sm={4} sx={{flexGrow:"1"}}>
              {
                  match && <Typography variant='body' color='primary' component="div" gutterBottom >Product Details</Typography>
              }
              <Typography variant='body'>{title}</Typography>
              <Typography variant='subtitle2'>{category}</Typography>
              <Typography variant='subtitle2'>{qty}</Typography>
              <Button onClick={()=>removeProduct(id)} disableRipple>REMOVE</Button> | <Button onClick={editQuantity} disableRipple>Edit</Button>
            </Grid>
            <Grid item xs={6} sm={2}>
               {
                   match && <Typography variant='body' color='primary' gutterBottom >Product Price</Typography>
               }
               <Typography sx={{textDecoration:"line-through"}} color='secondary' variant='subtitle2'>${(price * 3).toFixed(2)}</Typography>
               <Typography variant='subtitle2'>${price.toFixed(2)}</Typography>
               {
                    showQty && <div style={{marginTop:"15px"}}>
                                        <label>Quantity</label>
                                        <div style={{width:match ? "100%" : "100%"}} className={classes.Qty}>
                                            <span onClick={()=>decrease()}>-</span>
                                            <input value={value} readOnly type="text" name="Qty"/>
                                            <span onClick={()=>increase()}>+</span>
                                        </div>
                                </div>
               }
            </Grid>
            <Grid item xs={6} sm={2}>
               {
                   match && <Typography variant='body' color='primary' gutterBottom >Total Price</Typography>
               }
               <Typography variant='subtitle2'>${total.toFixed(2)}</Typography>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default SingleProductCart