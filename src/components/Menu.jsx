import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card_burger from "../images/burger_card.jpg"

function Menu() {
  const cardData = [
    { id: 1, title: 'Card 1', text: 'Some quick example text for Card 1.' },
    { id: 2, title: 'Card 2', text: 'Some quick example text for Card 2.' },
    { id: 3, title: 'Card 3', text: 'Some quick example text for Card 3.' },
    { id: 4, title: 'Card 4', text: 'Some quick example text for Card 4.' },
    { id: 5, title: 'Card 5', text: 'Some quick example text for Card 5.' },
    { id: 6, title: 'Card 6', text: 'Some quick example text for Card 6.' },
    { id: 7, title: 'Card 7', text: 'Some quick example text for Card 7.' },
    { id: 8, title: 'Card 8', text: 'Some quick example text for Card 8.' },
    { id: 9, title: 'Card 9', text: 'Some quick example text for Card 9.' }
  ];
  return (
    <div >
    <div className='menu_container'>
      { cardData.map(card =>( 
      <Card key={card.id} style={{ width: '18rem'}}>
      <Card.Img variant="top" src={card_burger} />
      <Card.Body>
        <Card.Title>120TL</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Satın Al</Button>
      </Card.Body>
    </Card>))}
    </div>x"
    </div>
  )
}

export default Menu
