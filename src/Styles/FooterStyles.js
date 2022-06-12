import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({
    root:{
        width:"100%",
        padding:"30px 10px",
        backgroundColor:theme.palette.background.paper,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:theme.palette.text.primary,
        boxShadow:"8px 8px 10px 5px #000",
        position:"absolute",
        bottom:"0",
        left:"0"
    },
    name:{
        color:theme.palette.primary.main,
        fontWeight:"bold"
    }
}))

export default useStyles