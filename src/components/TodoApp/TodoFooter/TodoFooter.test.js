import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import TodoStore from '../../../stores/TodoStore'

import TodoFooter from './index'

describe('TodoFooter', () => {
  it('should clear completed todos', () => {
    const todoStore = new TodoStore()
    jest.spyOn(todoStore, 'clearCompleted')
    const { getByTestId } = render(<TodoFooter todoStore={todoStore} />)
    const clearCompletedBtn = getByTestId('clear-completed-btn')
    fireEvent.click(clearCompletedBtn)
    expect(todoStore.clearCompleted).toBeCalledTimes(1)
  })
})
