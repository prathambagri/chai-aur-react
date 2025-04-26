
import './App.css'
import Login from './componets/Login'
import Profile from './componets/Profile'
import UserContextProvider from './context/UsercontextProvider'

function App() {
 

  return (
    <UserContextProvider>
      <h1>React with chai</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App
