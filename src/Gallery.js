import React from 'react'
import './Gallery.css'
import { useState, useEffect } from 'react';
import { storage } from './firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import {
  StaggeredGrid,
  StaggeredGridItem,
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
    
    
    <div>
      <div>
        <h1 className='heading'>Gallery</h1>
      </div>

        <StaggeredGrid
        className='gallery'
        columns={4} 
        columnWidth={300} 
        horizontalGap={50}
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
      </div>
  )
}

export default Gallery