import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { todoFilterTypes } from '../../../constants/TodoAppConstants'

@observer
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
    const { todoStore } = this.props

    return (
      <div>
        <span>Todos Left: {todoStore.todosLeft}</span>
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
