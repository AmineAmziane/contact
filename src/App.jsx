import { useState } from 'react'
import ContactUs from './ContactUs/'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <ContactUs />
    </div>
  )
}

export default App
