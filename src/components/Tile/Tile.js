import React from 'react'
import Image from '../Image/Image'
import Title from '../Title/Title'
import './Tile.scss'

export default function Tile(props) {
  return (
    <div className='tile'>
     <Image url={props.imageUrl}/>
     <Title label={props.imageLabel}/>
    </div>
  )
}
