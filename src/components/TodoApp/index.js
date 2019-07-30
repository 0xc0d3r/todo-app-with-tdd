import React, { Component } from 'react'

import TodoInput from './TodoInput'

class TodoApp extends Component {
  onPressEnterKey = todoDescription => {
    console.log('todoDescription: ', todoDescription)
  }

  render() {
    return (
      <div>
        <TodoInput onPressEnterKey={this.onPressEnterKey} />
      </div>
    )
  }
}
export default TodoApp
