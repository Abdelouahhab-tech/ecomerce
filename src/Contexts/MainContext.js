import React from "react";

const MainContext = React.createContext({
    'mode':false,
    setMode:()=>{},
    'selectedProducts':[],
    setselectedProducts:()=>{},
    'badgeCount':0,
    setBadgeCount:()=>{},
    "auth":false,
    setAuth:()=>{},
    "totalPrice":0,
    setTotalPrice:()=>{}
})

export default MainContext