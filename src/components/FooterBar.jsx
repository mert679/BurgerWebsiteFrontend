import React from 'react'
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
function FooterBar() {
  return (
    <footer style={{
        backgroundColor: "rgb(99, 26, 26)",
        color: "#fff",
        padding: "30px",
        textAlign: "center",
        bottom: "0"
       
      }}>
        <div className='social_media'>
          <a href="https://twitter.com/"><img src={twitter} alt="" /></a>
          <a href="https://www.facebook.com/"> <img src={facebook} alt="" /></a>
        </div>
        <p> <span>&#169;</span> All rights Reserved</p>
      </footer>
  )
}

export default FooterBar
