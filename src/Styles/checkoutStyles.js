import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({
    root:{
         padding:`${theme.mixins.toolbar.minHeight + 50}px 20px`,
         position:"relative",
         minHeight:"100vh"
    },
    label:{
        "& .MuiStepLabel-label.Mui-active":{
            color:theme.palette.primary.light,
            textAlign:"center"
        },
        "& .MuiStepLabel-label.Mui-completed":{
            color:theme.palette.text.default,
            textAlign:"center"
        },
        "& .MuiStepLabel-label.Mui-disabled":{
            color:theme.palette.text.default,
            textAlign:"center"
        },
        "& .MuiStepIcon-text":{
            fill:"#fff"
        }
    },
    form:{
        width:"100%",
        marginTop:"20px"
    },
    inputs:{
        margin:"10px 0 !important",
        "& span":{
           color:"rgba(255,0,0,0.5)",
           fontSize:"25px",
           fontWeight:"bold"
        },
        "& h5":{
           color:theme.palette.text.default
        },
        "& .MuiInput-root::before":{
            borderBottom:`2px solid ${theme.palette.text.default}`
        },
        "&:hover .MuiInput-root::before":{
            borderBottom:`2px solid ${theme.palette.text.default} !important`
        },
        "& .MuiInput-root":{
            padding:"8px 0 0 0",
            color:"#222"
        },
        "& .MuiInputLabel-root":{
             color:theme.palette.text.default
        },
        "& .MuiSvgIcon-root":{
             fill:theme.palette.primary.main
        },
        "& .MuiTypography-root":{
            fontFamily:' "Roboto","Helvetica","Arial",sans-serif',
            fontWeight: '400',
            fontSize: "0.75rem",
            lineHeight: "2",
            letterSpacing: "0.03333em",
            textAlign: "left"
        },
        "& .MuiSelect-select":{
            paddingLeft:"35px"
        }
    },
    actions:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:"10px",
        "& button":{
            borderRadius:"20px",
            padding:"5px 20px"
        },
        "& button:last-child":{
            color:"#fff"
        }
    },  
    confirmation:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        margin:"50px 0",
        width:"100%"
    },
    total:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"10px 12px",
        marginTop:"30px",
    },
    icon:{
        position:"absolute",
        left:"0"
    },
    last:{
        "& .MuiFormLabel-filled":{
            left:"0 !important",
            top:"-10px !important"
        },
        "& .MuiInputLabel-standard":{
            left:"32px",
            top:"-5px"
        },
        "& .MuiInputLabel-root.Mui-focused":{
            left:"0 !important",
            top:"-10px !important"
        }
    }
}))

export default useStyles