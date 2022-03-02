import React, { useState } from "react"
import { Carousel } from "react-bootstrap"

const CarouselImport = ({ carouselLinkTo, carouselImgSrc, carouselImgTitle, carouselImgText  }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="my-5">
      <Carousel.Item as="a" href={carouselLinkTo}>
        <img
          className="d-block carousel-img"
          src={carouselImgSrc}
          alt={(`${carouselImgTitle}の画像`)}
        />
        <Carousel.Caption>
          <h3>{carouselImgTitle}</h3>
          <p>{carouselImgText}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImport