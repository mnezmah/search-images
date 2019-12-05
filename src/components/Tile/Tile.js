import React from 'react'
import Image from '../Image/Image'
import Title from '../Title/Title'

export default function Tile(props) {
  return (
    <div className='Tile'>
     <Image url={props.imageUrl}/>
     <Title label={props.imageLabel}/>
    </div>
  )
}
