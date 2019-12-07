import React from 'react'
import { connect } from 'react-redux'
import Tile from './Tile'
import './TileContainer.scss'


function TileContainer(props) {
  return (
    <div className='container'>
      {props.images.length ?
        props.images.map(image => {
          return <Tile
            key={image.id}
            imageUrl={image.webformatURL}
            imageLabel={image.tags}
          />
        })
        : <p className='message'>Search results will be shown here ...</p>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(TileContainer)