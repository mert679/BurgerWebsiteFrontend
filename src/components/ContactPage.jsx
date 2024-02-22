import React from 'react'
import contact_img from "../images/contact_burger.jpg"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactPage() {
  return (
    <div>
    
      <div className="contact_container">
         <img src={contact_img} style ={{width: "49%", height: "500px", marginTop:"40px", marginBottom:"25px"}} /> 
      <div className="right_side">
      <h1>Bizimle İletişime Geçin</h1>
      <div className="form_container">
      <FloatingLabel controlId="floatingInput" label="Ad Soyad">
        <Form.Control type="text"  style={{width:"420px",height:"55px", marginTop: '10px'}}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Email">
        <Form.Control type="text" style={{width:"420px",height:"55px", marginTop: '10px'}} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Yorum">
        <Form.Control
          as="textarea"
          style={{ height: '100px',width:"420px", marginTop: '10px' }}
        />
      </FloatingLabel>
      <Button variant="primary" style={{  marginTop: '10px' }}>Submit</Button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default ContactPage
