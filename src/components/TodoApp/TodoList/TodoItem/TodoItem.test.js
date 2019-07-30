import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Todo from '../../../../stores/models/Todo'

import TodoItem from './index'

describe('TodoItem', () => {
  it('should complete the todo on check the checkbox', () => {
    const newTodo = {
      id: Date.now(),
      description: 'Learn TDD',
      completed: false
    }
    const todo = new Todo(newTodo)
    jest.spyOn(todo, 'toggleCompleted')
    const { getByTestId } = render(<TodoItem todo={todo} />)
    const checkbox = getByTestId(`${todo.id}`)
    expect(checkbox.checked).toBe(false)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
    expect(todo.toggleCompleted).toHaveBeenCalledTimes(1)
  })
})
