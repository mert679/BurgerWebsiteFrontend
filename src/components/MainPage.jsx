import React from 'react'
import backgroundImg from "../images/anamenu.jpg"
import { useNavigate } from 'react-router-dom'
function MainPage() {
  const navigate = useNavigate()
  return (
    <div>
        <div className='container-img' style={{
            backgroundImage:`url(${backgroundImg})`,
            width: "1263px",
            height: "500px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginBottom:"10px"
          
        }}>
            <button onClick={()=>navigate("/menu")} style={{zIndex:"2"}}>Sipariş ver</button>
        </div>
    </div>
  )
}

export default MainPage
