import React, { Component } from 'react'

import { todoFilterTypes } from '../../../constants/TodoAppConstants'

class TodoFooter extends Component {
  handleSelectAll = () => {
    const { todoStore } = this.props
    todoStore.setAppliedFilter(todoFilterTypes.all)
  }

  handleSelectActive = () => {
    const { todoStore } = this.props
    todoStore.setAppliedFilter(todoFilterTypes.active)
  }

  handleSelectCompleted = () => {
    const { todoStore } = this.props
    todoStore.setAppliedFilter(todoFilterTypes.completed)
  }

  handleClearCompleted = () => {
    const { todoStore } = this.props
    todoStore.clearCompleted()
  }

  render() {
    return (
      <div>
        <span>Todos Left: 0</span>
        <button onClick={this.handleSelectAll}>All</button>
        <button onClick={this.handleSelectActive}>Active</button>
        <button onClick={this.handleSelectCompleted}>Completed</button>

        <button
          onClick={this.handleClearCompleted}
          data-testid='clear-completed-btn'
        >
          Clear completed
        </button>
      </div>
    )
  }
}

export default TodoFooter
