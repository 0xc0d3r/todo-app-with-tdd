import TodoStore from './index'

describe('TodoStore', () => {
  it('should add a todo to list of todo items', () => {
    const todoStore = new TodoStore()
    expect(todoStore.todos.length).toBe(0)
    todoStore.addTodo('Learn TDD')
    expect(todoStore.todos.length).toBe(1)
  })
})
