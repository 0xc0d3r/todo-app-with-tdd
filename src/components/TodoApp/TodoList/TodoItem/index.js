import React, { Component } from 'react'

class TodoItem extends Component {
  onToggleTodoCompletion = () => {
    const { todo } = this.props
    todo.toggleCompleted()
  }

  onDeleteTodo = () => {
    const { todo, onDeleteTodo } = this.props
    onDeleteTodo(todo)
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
        <button
          data-testid={`delete-btn-${todo.id}`}
          onClick={this.onDeleteTodo}
        >
          X
        </button>
      </div>
    )
  }
}

export default TodoItem
