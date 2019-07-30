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

  it('should delete the todo on click delete button', () => {
    const newTodo = {
      id: Date.now(),
      description: 'Learn TDD',
      completed: false
    }
    const todo = new Todo(newTodo)
    const onDeleteTodo = jest.fn()
    const { getByTestId } = render(
      <TodoItem todo={todo} onDeleteTodo={onDeleteTodo} />
    )

    const deleteBtn = getByTestId('delete-btn')
    fireEvent.click(deleteBtn)
    expect(onDeleteTodo).toBeCalledWith(todo)
  })
})
