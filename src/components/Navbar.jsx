import React from 'react'
import burger_logo from "../images/burger_logo.jpg"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
      <nav className="navbar bg-danger">
        <a className="navbar bg-danger" href="#">
        <img src={burger_logo} alt="Logo" style={{width:"100px", height:"100px"}} />
        </a>
        <div className='nav-left-panel'>
           <button onClick={()=>navigate("/")}>Ana sayfa</button>
            <button onClick={()=>navigate("/menu")}>Menu</button>
            <button onClick={()=>navigate("/Hakkimizda")}>Hakkımızda</button>
            <button onClick={()=>navigate("/iletisim")}>İletişim</button>
          
        </div>
    </nav>
    </div>
  )
}

export default Navbar
