import React from 'react'
import './Title.scss'

export default function Title(props) {
  return (
    <div className="title">
      <p>{props.label}</p>
    </div>
  )
}