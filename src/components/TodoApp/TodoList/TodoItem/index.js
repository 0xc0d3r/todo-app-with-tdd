import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
    const { todo } = this.props
    return (
      <div>
        <input type='checkbox' />
        <span>{todo.description}</span>
        <button>X</button>
      </div>
    )
  }
}

export default TodoItem
