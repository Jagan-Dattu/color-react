import React, { useContext, useState } from 'react'
import { Click } from './components/Click'

function App() {
  const [color, setColor] = useState('') // <- central color state

  const bgMap = {
    red: 'bg-red-300',
    blue: 'bg-blue-200',
    green: 'bg-green-200',
    yellow: 'bg-yellow-200',
    purple: 'bg-purple-200',
    
  }

  return (
    <div className={`min-h-screen ${bgMap[color] || 'bg-gray-100'} transition-all duration-500`}>
      <Click color={color} setColor={setColor} />
    </div>
  )
}

export default App
