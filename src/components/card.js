import React from "react"
import { Card } from "react-bootstrap"

const CardOriginal = ({ linkParent, linkTo, imgSrc, title, description, moreText }) => {
  return (
    <Card class="card-group" style={{ width: '18rem' }} as="a" href={`/${linkParent}/${linkTo}/`}>
      <Card.Img variant="top" src={imgSrc} style={{ height: '12rem' }} />
      <Card.Body>
        <Card.Title as="h2" className="fw-bold h4">{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <p className="p-3 text-end">{moreText}</p>
    </Card>
  )
}

export default CardOriginal