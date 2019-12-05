import React from 'react'

export default function Form(props) {
  return (
    <div>
      <form onSubmit={props.onsubmit}>
        <input
          type="search"
          name="search"
          placeholder="Search 1.000.000 images..."
          value={props.value}
          onChange={props.onChangeHandler} />
      </form>
    </div>
  )
}
