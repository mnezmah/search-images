import React from 'react'
import { connect } from 'react-redux'
import Tile from './Tile'


 function TileContainer(props) {
   console.log('props: ', props)
  return (
    <div>
     { props.images.length ? 
     props.images.map(image => {
       return <Tile 
       key = {image.id}
      imageUrl= {image.webformatURL}
      imageLabel={image.tags}
      />
     })
       : 'loading...'}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(TileContainer)