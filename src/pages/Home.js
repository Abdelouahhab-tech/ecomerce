import React, { useContext, useEffect, useState } from 'react'
import { useTheme } from '@mui/styles'
import { Box, Button, Grid, ImageList, ImageListItem, Typography, useMediaQuery } from '@mui/material'
import { Container } from '@mui/system'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import useStyles from '../Styles/HomeStyle'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import * as api from '../api/Api'
import MainContext from '../Contexts/MainContext'
import GalleryImages from '../components/GalleryImages'

const Home = () => {
    const classes = useStyles()
    const [items,setItems] = useState([])
    const match = useMediaQuery('(max-Width:500px)')
    const theme = useTheme()
    const {setBadgeCount} = useContext(MainContext)
    const [images,setImages] = useState([])

    const getImages = async()=>{
        const data = await api.getProducts()
        const bestProducts = data?.filter(product => product.rating.rate > 4)
        setItems(bestProducts)
        const products = JSON.parse(localStorage.getItem('selectedProducts'))
        if(products !== null)
          setBadgeCount(products.length)
        else
          setBadgeCount(0)
    }

    const generateImage = array => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      setImages([
        array[0],
        array[1],
        array[4]
      ])
    }

    useEffect(()=>{
       getImages()
       generateImage([1,2,3,4,5,6,7,8])
    },[])

  return (
    <div className={classes.root}>
        <NavBar/>
        <section className={classes.banner}>
          <Grid container>
          <Grid item xs={12} sm={2} md={3}></Grid>
          <Grid item xs={12} sm={8} md={6}>
          <Box sx={{
            backgroundColor:match ? "transparent": "rgba(0,0,0,.3)"}} 
            className={classes.box}
        >
          <Typography sx={{color:match ? "#fff" : theme.palette.primary.main,fontWeight:"bold"}} textAlign="center" variant='h5' color="primary" gutterBottom>Easy Life</Typography>
          <Typography variant='p' component="div" textAlign="center" className={classes.paragraph} gutterBottom>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla quis accusamus repellat in possimus ab praesentium quidem minus? Dignissimos ipsam totam nulla qui saepe dolor pariatur atque sint voluptatem.</Typography>
          <Button sx={{width:match ? "100%" : "25%"}} variant='contained' className={classes.btn}><Link to='/Store' className={classes.link}>Shop Now</Link></Button>
        </Box>
          </Grid>
          <Grid item xs={12} sm={2} md={3}></Grid>
          </Grid>
        </section>
        <section className={classes.bestProduct}>
        <Typography sx={{my:3}} variant='h6' color="primary" textAlign="center"><span className={classes.line}>Best Products</span></Typography>
        <Carousel items={items} />
        </section>
        <section className={classes.gallery}>
        <Typography sx={{mt:1,mb:4}} variant='h6' color="primary" textAlign="center"><span className={classes.line}>Gallery</span></Typography>
          <Container>
          <ImageList
          cols={match ? 1 : 3}
          gap={1}
          sx={{my:2}}
          >
          {
            images.map((image,index) => {
               const url = `https://swiperjs.com/demos/images/nature-${image}.jpg`
               return <GalleryImages key={index} src={url}/>
            }
          )
          }
          </ImageList>
          </Container>
        </section>
        <Footer/>
    </div>
  )
}

export default Home