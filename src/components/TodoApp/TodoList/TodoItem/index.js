import React, { Component } from 'react'

class TodoItem extends Component {
  onToggleTodoCompletion = () => {
    const { todo } = this.props
    todo.toggleCompleted()
  }

  render() {
    const { todo } = this.props
    return (
      <div>
        <input
          type='checkbox'
          data-testid={todo.id}
          onChange={this.onToggleTodoCompletion}
        />
        <span>{todo.description}</span>
        <button>X</button>
      </div>
    )
  }
}

export default TodoItem
