import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({
    root:{
        width:"100%",
        minHeight:`100vh`,
        position:"relative",
        paddingTop:`${theme.mixins.toolbar.minHeight}px`,
        paddingBottom:`${theme.mixins.toolbar.minHeight + 50}px`
    },
    container:{
        paddingTop:theme.mixins.toolbar.minHeight + "px"
    },
    title:{
        color:theme.palette.text.primary
    },
    box:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      border:`2px solid ${theme.palette.primary.main}`,
      borderRadius:"20px",
      cursor:"pointer",
      overflow:"hidden",
      "& img":{
          width:"80%",
          height:"80%",
          backgroundSize:"cover"
      }
    },
    parent:{ 
        width:"100%",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    message:{
        marginTop:"50px",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        "& a":{
            textDecoration:"none",
            color:theme.palette.text.primary,
            backgroundColor:theme.palette.primary.main,
            padding:"5px 10px",
            borderRadius:theme.shape.borderRadius
        }
    },
    paper:{
        width:"100%",
        height:"fit-content",
        padding:"18px",
        background:theme.palette.background.paper
    },
    oldPrice:{
        display:"inline-block",
        marginRight:"10px !important",
        color:"#888",
        textDecoration:"line-through"
    },
    Qty:{
        display:"flex",
        justifyContent:"space-evenly",
        borderBottom:`2px solid ${theme.palette.primary.main}`,
        marginBottom:"10px",
        "& input":{
            flexGrow:"2",
            background:"none",
            border:"none",
            outline:"none",
            paddingLeft:"15px",
            color:theme.palette.text.primary,
            textAlign:"center"
        },
        "& span":{
            cursor:"pointer",
            fontSize:"22px",
            userSelect:"none"
        }
    },
    btn:{
        color:"#FFF !important",
        margin:"15px 0!important"
    },
    heading:{
        display:"block",
        width:"150px",
        paddingBottom:"10px",
        textAlign:"center",
        margin:"-20px auto 20px auto",
        color:theme.palette.text.default,
        fontWeight:"bold",
        borderBottom:`2px solid ${theme.palette.primary.main}`
    }
}))

export default useStyles