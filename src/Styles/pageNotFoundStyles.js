import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({
    root:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        minHeight:"100vh",
        backgroundColor:theme.palette.mode === "dark" ? "#000" : theme.palette.background.paper,
        "& img":{
            width:"30%",
            height:"30%"
        },
        "& a":{
            display:"block",
            background:theme.palette.mode === "dark" ? "linear-gradient(45deg,#FC4A1A, #F7B733)" : "linear-gradient(45deg,#00B09B, #7be495)",
            padding:"12px 30px",
            borderRadius:"25px",
            textAlign:"center",
            textDecoration:"none",
            color:'#fff'
        }
    }
}))

export default useStyles