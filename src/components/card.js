import React from "react"
import { Card } from "react-bootstrap"

const CardOriginal = ({ linkParent, linkTo, imgSrc, title, time, category, description, moreText }) => {
  return (
    <Card class="card-group" style={{ width: '18rem' }} as="a" href={`/${linkParent}/${linkTo}/`}>
      <div className="position-relative overflow-hidden" style={{ width: '100%', height: '12rem' }} >
        <Card.Img variant="top" src={imgSrc} className="position-absolute" style={{ top: '50%', transform: 'translateY(-50%)' }} />
      </div>
      <Card.Body>
        <Card.Title as="h2" className="fw-bold h4 mb-0">{title}</Card.Title>
        <Card.Text className="mt-1 mb-2 me-2 d-inline-block fs-small">{time}&nbsp;更新</Card.Text>
        <Card.Text className="mt-1 mb-2 px-1 d-inline-block blog-category fw-light fs-small">{category}</Card.Text>
        <Card.Text className="mt-2 overflow-hidden" style={{maxHeight:'120px'}}>
          {description}
        </Card.Text>
      </Card.Body>
      <p className="p-3 text-end">{moreText}</p>
    </Card>
  )
}

export default CardOriginal