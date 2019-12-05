import React from 'react'
import { connect } from 'react-redux'
import Tile from './Tile'


 function TileContainer() {
  return (
    <div>
      <Tile key = {this.props.images[0].id}
      imageUrl= {this.props.images[0].webformatURL}
      imageLabel={this.props.images[0].tags}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(TileContainer)