import React from 'react'

export default function Image(props) {
  return (
    <div className='image-container'>
      <img 
      className='image' 
      src={props.url} 
      alt=''/>
    </div>
  )
}
