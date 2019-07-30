import { action, observable } from 'mobx'

import Todo from '../models/Todo'
class TodoStore {
  @observable todos
  @observable appliedFilter
  constructor() {
    this.todos = []
    this.appliedFilter = 'ALL'
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
  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed)
  }
}

export default TodoStore
