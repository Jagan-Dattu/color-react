import React from 'react'
import { Box } from './Box'

export const Click = ({ color, setColor }) => {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple']

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-6">🎨 Pick a Color</h1>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)} 
        className="text-lg px-5 py-2 rounded-lg shadow bg-white border-2 border-gray-400 hover:border-blue-500 transition-all focus:outline-none mb-8"
      >
        <option value="" disabled>Select a color</option>
        {colors.map((c) => (
          <option key={c} value={c}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </option>
        ))}
      </select>
      <Box color={color} />
    </div>
  )
}
