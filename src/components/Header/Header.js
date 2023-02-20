import React from 'react'
import "./Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';
import logo from "./imgs/my-Picturefull.jpg"
function Header() {
    
  return (
    <div className='side_navber'>
        <div className='pic_and_name'>
            <img src={logo} className='avaterPic' alt="" />
            <h1>Sijon Niogi</h1>
        </div>
        <div className='section_name'>
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Home</h2>
            <h2>About</h2>

        </div>
        <div>
            <div className="social_icons">
                <h4><Icon.Facebook /></h4>
                <h4><Icon.Instagram /></h4>
                <h4><Icon.Youtube /></h4>
                <h4><Icon.Telegram /></h4>
            </div>
        </div>
    </div>
  )
}

export default Header;