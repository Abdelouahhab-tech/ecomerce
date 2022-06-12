import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({
    root:{
        width:"80%",
        margin:"20px 10px",
        display:"flex",
        alignItems:"flex-start",
        "& label":{
            marginTop:"10px",
            cursor:"pointer",
            fontFamily:"'Roboto'",
            fontSize:"15px",
            color:theme.palette.text.default
        }
    },
    btn:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        margin:"20px 0",
        "& button":{
           color:"#fff",
           borderRadius:"20px",
           width:"30%"
        }
    }
}))

export default useStyles