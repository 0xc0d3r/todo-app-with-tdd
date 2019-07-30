import React, { Component } from 'react'

class TodoInput extends Component {
  state = {
    description: ''
  }

  onChange = e => {
    this.setState({
      description: e.target.value
    })
  }

  onPressEnterKey = e => {
    const { onPressEnterKey } = this.props
    if (e.keyCode === 13) {
      onPressEnterKey(this.state.description)
      this.setState({
        description: ''
      })
    }
  }

  render() {
    return (
      <input
        type='text'
        name='todo-input'
        placeholder='What needs to be done?'
        onChange={this.onChange}
        onKeyDown={this.onPressEnterKey}
      />
    )
  }
}

export default TodoInput
