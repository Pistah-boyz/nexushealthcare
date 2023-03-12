import React, { useState } from "react";
import { Slide } from "@mui/material";
import VisibilitySensor from "react-visibility-sensor";

const SlideComponent = ({ children, direction }) => {
  const [view, setView] = useState(false);
  const onChange = (isVisible) => {
    if (!view) {
      setView(isVisible);
    }
  };
  return (
    <VisibilitySensor onChange={onChange}>
      <div>
        <Slide direction={direction} timeout={1000} in={view}>
          {children}
        </Slide>
      </div>
    </VisibilitySensor>
  );
};

export { SlideComponent };
