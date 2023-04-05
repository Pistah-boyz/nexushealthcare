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
    width: "100%",
    maxWidth: "100%",
    margin: "auto",
    overflow: "hidden",
    position: "relative",
    height: { sm: "450px", md: "600px", xs: "350px" },
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
      <Box sx={styles.sliderContainer}>
        <Slider {...settings1}>
          <div>
            <img
              src={slide1}
              alt="Slide 1"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div>
            <img
              src={slide2}
              alt="Slide 2"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div>
            <img
              src={slide3}
              alt="Slide 3"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div>
            <img
              src={slide4}
              alt="Slide 4"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </Slider>
      </Box>
    </Box>
  );
};

export { HomeSlider };
