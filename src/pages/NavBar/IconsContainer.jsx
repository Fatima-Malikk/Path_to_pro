import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const IconsContainer = () => {
    const styles = {
        iconsContainer: {
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            height: "50px",
            width: "40px",
            marginTop: "230px",
            marginLeft: "400px",
            marginBottom: "20px", // Add margin-bottom for the gap
        },
        iconButton: {
            borderRadius: "50%",
            border: "1px solid #1976d2",
        },
    };

    return (
        <div style={styles.iconsContainer}>
            <IconButton sx={{ color: "white", ...styles.iconButton }}>
                <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "white", ...styles.iconButton }}>
                <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: "white", ...styles.iconButton }}>
                <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "white", ...styles.iconButton }}>
                <LinkedInIcon />
            </IconButton>
        </div>
    );
};

export default IconsContainer