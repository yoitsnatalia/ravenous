import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Business from './components/Business.jsx'
import BusinessList from './components/BusinessList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
        < BusinessList />
        
    </div>
  )
}

export default App
