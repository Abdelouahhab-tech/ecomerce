import { ImageListItem } from '@mui/material'
import React from 'react'

const GalleryImages = ({src}) => {
  return (
    <ImageListItem>
      <img src={src}/>
    </ImageListItem>
  )
}

export default GalleryImages