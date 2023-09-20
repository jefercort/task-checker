/*import { useState } from 'react'*/
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </TodoList>

        {/* <CreateTodoButton /> */}
      </div>
    </>
  )
}

function TodoItem(){
  return (
    <li>
      <span>V</span>
      <p>Vamos con toda</p>
      <span>X</span>
    </li>
  );
}
export default App
