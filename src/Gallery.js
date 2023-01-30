import React from 'react'
import './Gallery.css'
import { useState, useEffect } from 'react';
import { storage } from './firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import {
  StaggeredAlignment,
  StaggeredGrid,
  StaggeredGridItem,
  StaggeredGridItemFunctional,
  StaggeredItemSpan
} from "react-staggered-grid";


function Gallery() {
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/")
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        })
      })
    })
  }, [])
  return (
    
      <StaggeredGrid
      className='gallery'
      columns={4} 
      columnWidth={300} 
      horizontalGap={100}
      verticalGap = {20}
      useElementWidth = {true}
      style = {{marginTop : "100px"}}
      >

          {imageList.map((url,index) => {
              return <StaggeredGridItem  index={index} initialPosition = {200} >
                  <img src= {url} style={{width: "100%"}}/>
                </StaggeredGridItem>
          })}
      </StaggeredGrid>
     
  )
}

export default Gallery