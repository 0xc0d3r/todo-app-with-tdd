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

  @action.bound
  toggleCompleted() {
    this.completed = !this.completed
  }
}

export default Todo
