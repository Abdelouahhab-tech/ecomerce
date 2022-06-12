import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Cart from './pages/cart'
import Store from './pages/Store'
import Home from './pages/Home'
import Product from './pages/product'
import './App.css'
import darkTheme from './Themes/darkTheme'
import lightTheme from './Themes/lightTheme'
import { ThemeProvider } from '@mui/material/styles'
import MainContext from './Contexts/MainContext'
import Checkout from './pages/checkout'
import PageNotFound from './pages/pageNotFound'

const App = () => {

  let mode = false;
  if(localStorage.key('mode')){
    const theme = localStorage.getItem('mode')
    mode = theme === "true"
  }
  const [theme,setTheme] = useState(mode)
  const [selectedProducts,setselectedProducts] = useState([])
  const [badgeCount,setBadgeCount] = useState(0)
  const [auth,setAuth] = useState(false)
  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(()=>{
    const selected = JSON.parse(localStorage.getItem('selectedProducts'))
    setselectedProducts(selected);
  },[badgeCount])

  return (
      <MainContext.Provider
      value={{
        'mode':theme,
        setMode:setTheme,
        'selectedProducts':selectedProducts,
        setselectedProducts:setselectedProducts,
        'badgeCount':badgeCount,
        setBadgeCount:setBadgeCount,
        "auth":auth,
        setAuth:setAuth,
        "totalPrice":totalPrice,
        setTotalPrice:setTotalPrice
      }}
      >
        <ThemeProvider theme={theme ? darkTheme : lightTheme}>
          <Router>
              <Routes>
              <Route path='/ecomerce' element={<Home/>} />
              <Route path='/Store' element={<Store/>} />
              <Route path='/cart' element={<Cart/>} />
                {
                  auth && <>
                            <Route path='/product:id' element={<Product/>} />
                            <Route path='/checkout' element={<Checkout/>} />
                          </>
                }
                <Route path="/ecomerce/*" element={<PageNotFound/>} />
              </Routes>
          </Router>
        </ThemeProvider>
      </MainContext.Provider>
  )
}

export default App