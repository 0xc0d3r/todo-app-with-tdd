import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { todoFilterTypes } from '../../../constants/TodoAppConstants'
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

  it('should set applied filter as ALL after clicking on All button', () => {
    const todoStore = new TodoStore()
    jest.spyOn(todoStore, 'setAppliedFilter')
    const { getByTestId } = render(<TodoFooter todoStore={todoStore} />)
    const allFilterBtn = getByTestId('all-btn')
    fireEvent.click(allFilterBtn)
    expect(todoStore.setAppliedFilter).toBeCalledWith(todoFilterTypes.all)
  })
})
