import React from 'react'
import './Image.scss'

export default function Image(props) {
  return (
    <div className='image-container'>
      <img
        className='image'
        src={props.url}
        alt='' />
    </div>
  )
}