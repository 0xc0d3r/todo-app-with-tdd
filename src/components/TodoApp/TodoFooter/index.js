import React, { Component } from 'react'

class TodoFooter extends Component {
  render() {
    return (
      <div>
        <span>Todos Left: 0</span>
        <button onClick={this.handleSelectAll}>All</button>
        <button onClick={this.handleSelectActive}>Active</button>
        <button onClick={this.handleSelectCompleted}>Completed</button>
        <button onClick={this.handleClearCompleted}>Clear completed</button>
      </div>
    )
  }
}

export default TodoFooter
