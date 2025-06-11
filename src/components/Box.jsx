import React from 'react'

export const Box = ({ color }) => {
  const boxColorMap = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-400',
    purple: 'bg-purple-500',
  }

  return (
    <div
      className={`w-60 h-60 rounded-xl shadow-xl border-4 border-black transition-all duration-500 ${boxColorMap[color] || 'bg-gray-300'}`}
    >
    </div>
  )
}
