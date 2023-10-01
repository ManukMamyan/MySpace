import { useEffect } from 'react'
import Button from '@my-space/ui/src/components/Button'
import './App.css'

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])
  return (
    <>
      <Button />
      <div className="App">Вот тут будет жить ваше приложение :)</div>
    </>
  )
}

export default App
