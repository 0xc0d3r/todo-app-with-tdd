import React, { Component } from 'react'

import TodoInput from './TodoInput'
import TodoList from './TodoList'

class TodoApp extends Component {
  onPressEnterKey = todoDescription => {
    const { todoStore } = this.props
    todoStore.addTodo(todoDescription)
  }

  render() {
    const { todoStore } = this.props
    return (
      <div>
        <TodoInput onPressEnterKey={this.onPressEnterKey} />
        <TodoList todoStore={todoStore} />
      </div>
    )
  }
}
export default TodoApp
