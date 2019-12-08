import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { getImages } from '../../actions/images'

class FormContainer extends Component {
  state = {
    value: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.getImages(this.state.value)
    this.setState({
      value: ''
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Form value={this.state.value}
          onChangeHandler={this.onChangeHandler}
          onsubmit={this.onSubmit} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

const mapDispatchToProps = {
  getImages
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)