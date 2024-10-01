import React from 'react'

const Footer = ({showModal, handleToggleModal}) => {
  return (
    <footer>
        <div className='bgGradient'></div>
        <div>
            <h2>The Brian Marshal Picture</h2>
            <h1>APDO Project</h1>

        </div>
        <button onClick={handleToggleModal}>
            <i className="fa-solid fa-circle-info"></i> 
        </button>
    </footer>
  )
}

export default Footer