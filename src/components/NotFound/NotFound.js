import React from 'react'
import { Link } from 'react-router-dom'
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
        <h2>Sorry</h2>
        <p>The Page cannot be found</p>
        <div className="links">
            <Link to = '/'>Back to the Homepage ....</Link>
        </div>
    </div>

   
  )
}

export default NotFound