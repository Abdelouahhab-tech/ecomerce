// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import useStyles from "../Styles/CarouselStyles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MainContext from "../Contexts/MainContext";
import { CircularProgress } from "@mui/material";

const Carousel = ({items}) =>{
    const classes = useStyles();
    const {setAuth} = useContext(MainContext)
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={`mySwiper ${classes.img}`}
      >
        {
            items?.length > 0 ? items?.map((product)=>(
                <SwiperSlide key={product.id}>
                   <Link onClick={()=>setAuth(true)} to={`/product${product.id}`}><img src={product.image} alt={product.title} /></Link>
                </SwiperSlide>
            )) :     <div className={classes.parent}>
                        <CircularProgress sx={{alignSelf:"center"}}/>
                     </div>
        }
      </Swiper>
    </>
  );
}

export default Carousel
