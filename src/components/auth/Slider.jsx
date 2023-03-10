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
      {/* <Box sx={styles.sliderContainer}>
        <Slider {...settings2}>
          <div>
            <div class="title">
              <h1>
                With Leading Career <span class="bold">Opportunities</span>
              </h1>
              <h3>Connecting Healthcare Jobseekers</h3>
            </div>
            <div class="content">
              <p>
                From hospital staffing to research laboratory work and
                government positions, Ellsworth Healthcare Staffing finds the
                perfect candidate for every role.
              </p>{" "}
              <a
                href="https://ehstaffing.com/home-healthcare-agency-atlanta/"
                tabindex="-1"
              >
                Learn More
              </a>
            </div>
          </div>
        </Slider>
      </Box> */}
    </Box>
  );
};

export { HomeSlider };
