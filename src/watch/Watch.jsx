import React from 'react'
import {ArrowBackOutlined} from "@material-ui/icons"
import './watch.scss'
const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined/>
    
        </div>
        <video className='video' autoplay progress controls src=""></video>
    </div>
  )
}

export default Watch