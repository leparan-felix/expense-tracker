import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseForm from './ExpenseForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <ExpenseForm />
      </div>
        </>
  )
}



export default App
