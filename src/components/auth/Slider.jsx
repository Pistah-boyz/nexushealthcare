import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";

import { Container } from "../../ui";
import { COLORS } from "../../ui/Theme/colors";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide4.jpg";

const styles = {
  sliderContainer: {
    display: "flex",
    margin: "auto",
  },
};

const HomeSlider = () => {
  const settings1 = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 9000,
    fade: true,
    pauseOnHover: false,
    dots: false,
  };

  const settings2 = {
    fade: true,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <Box>
      <Box>
        <Slider {...settings1}>
          <div>
            <img src={slide1} />
          </div>
          <div>
            <img src={slide2} />
          </div>
          <div>
            <img src={slide3} />
          </div>
          <div>
            <img src={slide4} />
          </div>
        </Slider>
      </Box>
    </Box>
  );
};

export { HomeSlider };
