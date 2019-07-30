import TodoStore from './index'

describe('TodoStore', () => {
  let todoStore
  beforeEach(() => {
    todoStore = new TodoStore()
    return todoStore
  })
  it('should add a todo to list of todo items', () => {
    expect(todoStore.todos.length).toBe(0)
    todoStore.addTodo('Learn TDD')
    expect(todoStore.todos.length).toBe(1)
  })

  it('should delete the given todo from list of todo items', () => {
    todoStore.addTodo('Learn Jest')
    todoStore.addTodo('Learn RTL')
    todoStore.addTodo('Learn TDD')

    expect(todoStore.todos.length).toBe(3)
    todoStore.deleteTodo(todoStore.todos[0])
    expect(todoStore.todos.length).toBe(2)
  })

  it('should clear completed todo items', () => {
    todoStore.addTodo('Learn Jest')
    todoStore.addTodo('Learn RTL')
    todoStore.addTodo('Learn TDD')

    expect(todoStore.todos.length).toBe(3)
    todoStore.todos[0].toggleCompleted()
    todoStore.todos[2].toggleCompleted()
    todoStore.clearCompleted()
    expect(todoStore.todos.length).toBe(1)
  })
})
