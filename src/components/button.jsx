import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import PropTypes from "prop-types";

const CustomButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  transition: background-color 0.5s, transform 0.5s;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px 3px #535bf2;

  .button {
    position: relative;
    z-index: 1;
  }

  .button-content {
    padding: 4px 8px; /* Add padding for space above and below the text */
  }

  .button-content:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #ffffff;
    transition: width 0.5s, right 0.5s;
    z-index: -1;
    border-radius: inherit;
  }

  .button-content:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    background-color: #ffffff;
    transition: width 0.5s, left 0.5s;
    z-index: -1;
    border-radius: inherit;
  }

  .button-icon {
    margin-left: 8px;
    width: 14px; /* Adjust the width as desired */
    height: 14px; /* Adjust the height as desired */
    transition: all 0.5s; /* Add transition for icon changes */
    
  }

  &:hover {
    background-color: #ffffff;
    color: black;
    transform: scaleX(1);

    .button-content:before {
      width: 100%;
      right: 100%;
    }

    .button-content:after {
      width: 100%;
      left: 100%;
    }

    .button-icon:after {
      width: 100%;
      left: 100%;
      /* Update the styles for the first icon on hover */
      // color:red;
      
    }
  }

  &:not(:hover) {
    .button-content:before {
      right: 0;
    }

    .button-content:after {
      left: 0;
    }

    .button-icon {
      /* Update the styles for the first icon when not hovered */
      opacity: 1;
    }
  }
`;

const Buttons = ({ text, iconUrl, iconUrlSecond ,top, onClickButton}) => {
  const [color, setColor] = useState("primary");

  return (
    <Stack spacing={2} direction="row">
      <CustomButton variant="contained" onClick={onClickButton}>
        <span className="button-content">{text}</span>
        {iconUrl && <img className="button-icon" src={iconUrl} alt="Icon" />}
      </CustomButton>
    </Stack>
  );
};

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
  iconUrl: PropTypes.string, // optional first icon URL
  iconUrlSecond: PropTypes.string, // optional second icon URL
};

export default Buttons;
