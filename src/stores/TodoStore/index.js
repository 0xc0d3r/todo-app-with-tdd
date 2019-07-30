import { action, observable } from 'mobx'

import Todo from '../models/Todo'
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

  @action.bound
  deleteTodo(todo) {
    this.todos.remove(todo)
  }

  @action.bound
  clearCompleted() {}
}

export default TodoStore
