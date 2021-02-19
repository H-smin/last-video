import React from 'react'
import demo from '../../demo/demo.mp4'
import poster from '../../img/poster.webp'
import './index.css'

export default class Video extends React.Component {
  render() {
    return (
      <div className='Video'>
        <video poster={poster} className='video' controls='controls'>
          <source src={demo} type="video/mp4"/>
        </video>
      </div>
    )
  }
}