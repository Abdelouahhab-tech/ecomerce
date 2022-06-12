import {makeStyles} from '@mui/styles'

const useStyles = makeStyles((theme)=>({

    img:{
        "& .swiper-wrapper":{
           padding:"20px 10px"
        },
        "& .swiper":{
            width: "100%",
            padding:"15px !important"
        },
        "& .swiper-slide":{
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "300px",
            height:" 300px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        "& .swiper-slide a":{
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        },
        "& .swiper-slide img":{
            display: "block",
            width: "50%",
            height:"50%",
            objectFit:"cover",
            borderRadius:"10px"
        }

    },
    parent:{ 
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },

}))

export default useStyles;