import React, { Component } from 'react'
import Form from './Form'

export default class FormContainer extends Component {
  state = {
    value: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  onChangeHandler = (e) => {
    this.setState({
      value: e.target.value
    })
    console.log('value: ', this.state.value)
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
