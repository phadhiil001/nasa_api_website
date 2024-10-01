import { useEffect, useState } from "react"
import Footer from "./component/Footer"
import Main from "./component/Main"
import SideBar from "./component/SideBar"

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  
  function handleToggleModal() {
    setShowModal(!showModal)
  }
  
  useEffect(()=> {
    async function fetchAPIDATA() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString()
      const localKey =  `NASA-${today}`
      if(localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched data today');
        return
      }
      localStorage.clear()


      try{
        const response = await fetch(url)
        const apiData = await response.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API Today')
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIDATA()
  }, [])

  return (
    <>
      {data ? <Main data={data} /> : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}

      {showModal && 
        (<SideBar data={data} handleToggleModal={handleToggleModal} />)
      }

      {data && 
      (<Footer data={data} handleToggleModal={handleToggleModal} /> )
      }

    </>
  )
}

export default App
