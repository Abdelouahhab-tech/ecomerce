import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import {Container,FormControl,InputLabel,Select,MenuItem,useMediaQuery,Grid, CircularProgress} from "@mui/material"
import useStyles from '../Styles/StoreStyle'
import Product from '../components/Product'
import { useTheme } from '@mui/material/styles'
import * as api from '../api/Api'
import MainContext from '../Contexts/MainContext'
import Footer from '../components/Footer'


const Home = () => {
    const [categories,setCategories] = useState([])
    const [products,setProducts] = useState([])
    const [value,setValue] = useState("")
    const matches = useMediaQuery('(max-width:600px)')
    const classes = useStyles()
    const theme = useTheme()
    const {setBadgeCount} = useContext(MainContext)

    const getCategories = async()=>{
        const data = await api.getAllCategories()
        setCategories(data)
        const count = (JSON.parse(localStorage.getItem('selectedProducts'))?.length)
        setBadgeCount(count ? count : 0)
    }
    const getProducts = async ()=>{
        const data = await api.getProducts()
        setProducts(data)
    }


    const filterProducts = async(e)=>{
        setProducts([])
        setValue(e.target.value)
        const data = await api.filterProductsWithCategory(e.target.value)
        setProducts(data)
    }

    useEffect(()=>{
        getCategories()
        getProducts()
    },[])
  return (
    <div className={classes.wrapper}>
      <NavBar/>
      {
          categories?.length > 0 && products?.length > 0 ?
          <div>
            <Container sx={{
                display:"flex",
                justifyContent:"center",
                marginBottom:"15px",
                paddingTop:`${theme.mixins.toolbar.minHeight + 30}px`
            }}>
                <FormControl className={classes.root} variant="standard" sx={{
                    m: 1,
                    minWidth: matches ? "100%" : "30%"
                    }}>
                    <InputLabel id="demo-simple-select-standard-label">Categories</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="category"
                        value={value}
                        onChange={
                            filterProducts
                        }
                    >
                    <MenuItem value="All">All</MenuItem>
                    {
                        categories?.length > 0 && categories?.map((item,index)=>(
                            <MenuItem key={index} value={item}>{item}</MenuItem>
                        ))
                    }
                </Select>
                </FormControl>
            </Container>
            <Container>
            <Grid className={classes.container} container spacing={3}>
            {
                products?.length > 0 && products?.map((product)=>(
                    <Grid key={product.id} item xs={12} sm={6} md={4}>
                        <Product product={product}/>
                    </Grid>
                ))
            }
            </Grid>
            </Container>
          </div>
          :  
        <div className={classes.parent}>
            <CircularProgress sx={{alignSelf:"center"}}/>
        </div>
      }
      <Footer/>
    </div>
  )
}

export default Home