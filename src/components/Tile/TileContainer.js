import React from 'react'
import { connect } from 'react-redux'
import Tile from './Tile'


 function TileContainer(props) {
   console.log('props: ', props)
  return (
    <div>
     { props.images.length ? 
      <Tile key = {props.images[0].id}
      imageUrl= {props.images[0].webformatURL}
      imageLabel={props.images[0].tags}
      /> : 'loading...'}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(TileContainer)