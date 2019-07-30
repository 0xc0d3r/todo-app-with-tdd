import { action, observable } from 'mobx'

class Todo {
  id
  @observable description
  @observable completed

  constructor(todo) {
    const { id, description, completed } = todo
    this.id = id
    this.description = description
    this.completed = completed
  }
}

class TodoStore {
  @observable todos
  constructor() {
    this.todos = []
  }

  @action.bound
  addTodo(description) {
    const newTodo = {
      id: Date.now(),
      description,
      completed: false
    }
    this.todos.push(new Todo(newTodo))
  }
}

export default TodoStore
