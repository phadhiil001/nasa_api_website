import { useState } from "react"
import Footer from "./component/Footer"
import Main from "./component/Main"
import SideBar from "./component/SideBar"

function App() {
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  return (
    <>
      <Main />
      {showModal && 
        (<SideBar handleToggleModal={handleToggleModal} />)
      }
      <Footer handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App
