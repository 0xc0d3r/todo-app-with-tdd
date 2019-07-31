import { action, computed, observable } from 'mobx'

import { todoFilterTypes } from '../../constants/TodoAppConstants'

import Todo from '../models/Todo'
class TodoStore {
  @observable todos
  @observable appliedFilter
  constructor() {
    this.todos = []
    this.appliedFilter = todoFilterTypes.all
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

  @action.bound
  setAppliedFilter(appliedFilter) {
    this.appliedFilter = appliedFilter
  }

  @computed
  get filteredTodos() {
    switch (this.appliedFilter) {
      case todoFilterTypes.all:
        return this.todos
      case todoFilterTypes.active:
        return this.todos.filter(todo => !todo.completed)
      case todoFilterTypes.completed:
        return this.todos.filter(todo => todo.completed)
      default:
        return this.todos
    }
  }

  @computed
  get todosLeft() {
    return this.todos.filter(todo => !todo.completed).length
  }
}

export default TodoStore
