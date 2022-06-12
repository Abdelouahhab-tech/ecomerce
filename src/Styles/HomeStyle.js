import {makeStyles} from '@mui/styles'
import img from '../images/1.jpg'
const useStyles = makeStyles((theme)=>({
    root:{
        position:"relative",
        paddingBottom:`${theme.mixins.toolbar.minHeight + 50}px !important`,
        minHeight:"100vh"
    },
    banner:{
        paddingTop:theme.mixins.toolbar.minHeight,
        marginBottom:"10px",
        height:`calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
        width:"100%",
        backgroundImage:`url(${img})`,
        backgroundPosition:"bottom",
        backgroundAttachment:"fixed",
        backgroundSize:"cover",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    box:{
        padding:theme.spacing(2),
        borderRadius:theme.shape.borderRadius,
        margin:"10px !important",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center"
    },
    paragraph:{
        color:"#fff"
    },
    btn:{
        borderRadius:"20px !important",
        margin:"15px !important"
    },
    link:{
        textDecoration:"none",
        color:"#fff"
    },
    line:{
        borderBottom:`2px solid ${theme.palette.primary.main}`,
        padding:"10px 0",
        fontWeight:"bold"
    },
    bestProduct:{
        padding:"20px 0"
    }
}))

export default useStyles