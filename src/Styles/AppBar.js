import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({
    appBar:{
        backgroundColor:theme.palette.background.paper+" !important",
        padding:"8px 15px !important",
        marginBottom:"10px !important"
    },
    link:{
        color:theme.palette.text.primary,
        textDecoration:"none !important"
    },
    store:{
        color:theme.palette.primary.main,
        fontWeight:"bold"
    },
    btn:{
        width:"80px",
        margin:"0 5px",
        display:"inline-block",
        padding:"6px 10px",
        textAlign:"center",
        borderRadius:"5px",
        transition:"all .2s ease-in !important",
        "&:hover":{
            backgroundColor:theme.palette.primary.light,
            color:"#fff !important",
        },
        "&.active":{
            backgroundColor:theme.palette.primary.main,
            color:"#fff !important"
        }

    },
    badge:{
        margin:"0 15px !important",
        "& .BaseBadge-badge":{
            color:"#fff !important"
        }
    }
}))

export default useStyles