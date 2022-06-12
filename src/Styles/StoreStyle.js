import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({
    wrapper:{
        position:"relative",
        paddingBottom:`${theme.mixins.toolbar.minHeight + 50}px !important`,
        minHeight:"100vh"
    },
    root:{
        "& .MuiSelect-select":{
            background:"transparent !important",
            padding:"3 10px !important",
            color:theme.palette.text.default,
            borderBottom:`2px solid ${theme.palette.primary.main} !important`,
        },
        "& .MuiSvgIcon-root":{
            color:theme.palette.primary.main
        }
    },
    container:{
        padding:`15px !important`,
    },
    parent:{
        width:"100%",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
}))

export default useStyles