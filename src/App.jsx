import './App.css'
import Student1 from './Student1'
import Student2 from './Student2'
import TodoList from './components/TodoList'
import UsersList from './components/UsersList'

function App() {

  return (
    <div className='App'>
      <h2>Higher Order Component</h2>
      {/* <div className='section'>
        <div>
          <UsersList />
        </div>
        <div>
          <TodoList />
        </div>
      </div> */}

      <Student1 />
      <Student2 />
    </div>
  )
}

export default App
