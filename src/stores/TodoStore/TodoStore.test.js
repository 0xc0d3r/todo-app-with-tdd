import TodoStore from './index'

describe('TodoStore', () => {
  it('should add a todo to list of todo items', () => {
    const todoStore = new TodoStore()
    expect(todoStore.todos.length).toBe(0)
    todoStore.addTodo('Learn TDD')
    expect(todoStore.todos.length).toBe(1)
  })

  it('should delete the given todo from list of todo items', () => {
    const todoStore = new TodoStore()
    todoStore.addTodo('Learn Jest')
    todoStore.addTodo('Learn RTL')
    todoStore.addTodo('Learn TDD')

    expect(todoStore.todos.length).toBe(3)
    todoStore.deleteTodo(todoStore.todos[0])
    expect(todoStore.todos.length).toBe(3)
  })
})
