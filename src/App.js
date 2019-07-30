import React from 'react'

import TodoApp from './components/TodoApp'

import stores from './stores'

import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <TodoApp todoStore={stores.todoStore} />
      </header>
    </div>
  )
}

export default App
