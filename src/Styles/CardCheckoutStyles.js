import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({
    card:{
        margin:"5px 0!important",
        minHeight:"100px"
    },
    container:{
        display:"flex !important",
        alignItems:"center !important"
    },
    imageContainer:{
        display:"flex",
        alignItems:"center"
    },
    image:{
        width:"120px",
        height:"120px",
        ObjectFit:"cover"
    }
}))

export default useStyles