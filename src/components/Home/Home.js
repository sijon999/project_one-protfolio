import React from 'react'
import "./Home.css"
import BgcImg from "./imgs/banner_bgc_pic.jpg"
function Home() {
  return (
    <div style={{ backgroundImage:`url(${BgcImg})` }} className="banner_page">
      <div className='banner_page_text'>
        <h2>Welcome...</h2>
        <h1>I'm a Developer</h1>
        <h3>based in Rajshahi, Bangladesh</h3>
      </div>
    </div>
  )
}

export default Home;