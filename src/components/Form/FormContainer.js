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
    // console.log('submitted')
  }

  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value
    })
    console.log('value: ', this.state.value)
  }

  render() {
    console.log('PROPS: ', this.props)
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