import React, { Component } from 'react'
import { observer } from 'mobx-react'

import TodoItem from './TodoItem'

@observer
class TodoList extends Component {
  renderTodos() {
    const { todoStore } = this.props
    return todoStore.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
  }
  render() {
    return <div> {this.renderTodos()} </div>
  }
}

export default TodoList
