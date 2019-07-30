import React, { Component } from 'react'

import { observer } from 'mobx-react'

@observer
class TodoItem extends Component {
  onToggleTodoCompletion = () => {
    const { todo } = this.props
    todo.toggleCompleted()
  }

  onDeleteTodo = () => {
    const { todo, onDeleteTodo } = this.props
    onDeleteTodo(todo)
  }

  renderDescription = () => {
    const {
      todo: { completed, description }
    } = this.props
    return completed ? (
      <strike>{description}</strike>
    ) : (
      <span>{description}</span>
    )
  }

  render() {
    const {
      todo: { id, completed }
    } = this.props
    return (
      <div>
        <input
          checked={completed}
          type='checkbox'
          data-testid={id}
          onChange={this.onToggleTodoCompletion}
        />
        {this.renderDescription()}
        <button data-testid={`delete-btn-${id}`} onClick={this.onDeleteTodo}>
          X
        </button>
      </div>
    )
  }
}

export default TodoItem
