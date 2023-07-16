import React from "react"
import logo from "../pic/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo} alt='' />
          </div>
          <p>© 2023. All rights reserved by GorkCoder-Themes.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer