import React from 'react'
import { useState, useEffect } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes, listAll , getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid'

function Admin() {
  const [imageUpload , setImageUpload] = useState(null)
  const [imageList , setImageList] = useState([]);
  const imageListRef = ref(storage , "images/")
  const uploadImage = () =>{
    if (imageUpload == null) return ;
    const imageRef = ref(storage , `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      // alert("Image Uploaded")
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev,url])
      })
      
    });

    
  }
  useEffect(() =>{
    listAll(imageListRef).then((response) =>{
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev,url]);
        })
      })
    })
  },[])
  return (
    <div className="App">
      <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}}/>
      <button onClick={uploadImage}>Upload Image</button>
      {imageList.map((url) => {
        return <img src= {url} alt="" />
      })}
    </div>
  );
}

export default Admin