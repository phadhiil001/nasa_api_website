import React from 'react'

const SideBar = ({handleToggleModal}) => {
  return (
    <div className='sidebar'>
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>The Brian Marshal Landscape</h2>
        <div>
          <p>Description</p>
          <p>Avfdlibgdbhb  hblkdf.bldkbdfkb;f.cbgv lfkhbdlbfi</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}

export default SideBar