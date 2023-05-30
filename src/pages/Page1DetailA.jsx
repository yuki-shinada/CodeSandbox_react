import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img01 from "../images/img01.png";
import img02 from "../images/img02.png";
import img03 from "../images/img03.png";
import img04 from "../images/img04.png";
import img05 from "../images/img05.png";
import img06 from "../images/img06.png";

import "slick-carousel/slick/slick-theme.css";

export const Page1DetailA = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    variableWidth: true,
  };

  const images = [img01, img02, img03, img04, img05, img06];
  return (
    <Slider {...settings}>
      {images.map((img) => (
        <div>
          <img src={img} />
        </div>
      ))}
    </Slider>
  );
};
