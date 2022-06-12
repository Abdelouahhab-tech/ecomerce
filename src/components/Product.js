import React, { useContext } from 'react'
import {Card,CardHeader,CardContent,CardActions,Button,Avatar,Typography, Grow} from '@mui/material'
import useStyles from '../Styles/productStyle'
import { useTheme } from '@mui/material/styles'
import {Link} from 'react-router-dom'
import MainContext from '../Contexts/MainContext'

const Product = ({product}) => {
  const {id,title,description,category,image} = product
  const classes = useStyles()
  const theme = useTheme()
  const { setAuth } = useContext(MainContext)

  return (
    <Link onClick={()=>setAuth(true)} className={classes.link} to={`/product${id}`}>
      <Grow in={true} appear={true} easing={{enter:"linear",exit:"linear"}} timeout={800}>
        <Card elevation={3} sx={{minHeight:"500px",position:"relative"}}>
          <CardHeader
            avatar={
              <Avatar sx={{background:theme.palette.primary.main,color:theme.palette.text.avatar}}>
                {title.substr(0,1).toUpperCase()}
              </Avatar>
            }
            title={title}
            subheader={category}
          />
          <div style={{width:"100% !important",height:"200px !important"}}>
            <img src={image} alt={title} style={{width:"100%",height:"250px",objectfit:"cover"}} />
          </div>
          <CardContent sx={{marginBottom:"25px"}}>
            <Typography variant="body2" color="text.secondary">
            {description.substr(0,100) + "..."}
            </Typography>
        </CardContent>
        <CardActions sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",position:"absolute",bottom:'0'}}>
        <Button>Order Now</Button>
        </CardActions>
        </Card>
      </Grow>
    </Link>
  )
}

export default Product