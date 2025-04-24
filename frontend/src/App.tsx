import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-600">{message}</h1>
    </div>
  )
}

export default App
