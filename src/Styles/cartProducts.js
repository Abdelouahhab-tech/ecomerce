import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({
    root:{
        paddingBottom:theme.mixins.toolbar.minHeight + 50 +"px",
        position:"relative",
        minHeight:"100vh"
    } ,
    details:{
         marginBottom:"20px"
     },
     image:{
         width:"120px",
         height:"120px",
         border:`2px solid ${theme.palette.primary.main}`,
         borderRadius:theme.shape.borderRadius
     },
     imageContainer:{
         display:"flex",
         justifyContent:"center",
         alignItems:"center"
     },
     productDetails:{
         "& button":{
             marginLeft:"-7px"
         },
         "& button:hover":{
            background:"transparent"
        }
     },
     qty:{
         marginTop:"10px !important",
     },
     empty:{
         display:"flex",
         justifyContent:"center",
         alignItems:"center",
         height:"300px",
         flexDirection:"column",
         marginTop:theme.mixins.toolbar.minHeight + 20 + "px",
         fontWeight:"bold",
         color:theme.palette.text.default,
         "& a":{
             textDecoration:"none"
         }
     },
     checkoutContainer:{
        display:"flex !important",
        justifyContent:"flex-end !important",
        alignItems:"center !important"
     },
     checkout:{
         display:"flex",
         justifyContent:"space-evenly",
         alignItems:"center",
         marginTop:"15px !important",
         padding:"10px 0",
         "& span":{
             color:theme.palette.text.primary
         }
     },
     Qty:{
        display:"flex",
        justifyContent:"space-evenly",
        borderBottom:`2px solid ${theme.palette.primary.main}`,
        marginBottom:"10px",
        "& input":{
            background:"none",
            width:"80%",
            border:"none",
            outline:"none",
            color:theme.palette.text.primary,
            textAlign:"center"
        },
        "& span":{
            cursor:"pointer",
            fontSize:"22px",
            userSelect:"none"
        }
    },
    heading:{
        display:"block",
        width:"100px",
        paddingBottom:"10px",
        textAlign:"center",
        margin:"0 auto",
        color:theme.palette.text.default,
        fontWeight:"bold",
        borderBottom:`2px solid ${theme.palette.primary.main}`
    }
}))

export default useStyles