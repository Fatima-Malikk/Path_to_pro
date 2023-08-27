import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

const ButtonComp = () => {
    const styles = {
        buttonStyle: {
            width: "175px",
            height: "55px",
            borderRadius: "60px",
            background: "linear-gradient(180deg, #FFFFFF 0%, #ACCCFF 100%)",
            color: "black",
            alignSelf: "flex-end",
            top: "-8px",
        },
        arrowIcon: {
            width: "25px",
            height: "30px",
            padding: "2px",
            color: "#3583FE",
            transform: "rotate(-45deg)",
        },
    };

    return (
        <Button style={styles.buttonStyle}>
            Sign In <ArrowForwardIcon style={styles.arrowIcon} />
        </Button>
    );
};
export default ButtonComp;