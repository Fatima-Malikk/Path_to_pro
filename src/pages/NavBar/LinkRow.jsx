import React from "react";
import { useNavigate } from "react-router-dom";

const LinkRow = ({ links, handleOpenNavMenu }) => {
    const styles = {
        linkRow: {
            display: "flex",
            alignItems: "center",
            marginBottom: "40px", // Add margin-bottom to create gaps
        },
        link: {
            cursor: "pointer",
            margin: "10px 100px",
            textDecoration: "none",
            color: "#FFFFFF",
            fontFamily: "Neo Robotix",
            fontSize: "40px",
            fontStyle: "italic",
            fontWeight: "400",
            lineHeight: "50px",
            letterSpacing: "0.02em",
            textAlign: "left",
            marginTop: "20px",
            marginBottom: "0px",
        },
        separator: {
            position: "relative",
            height: "30px",
            opacity: 0.4,
            border: "1px solid #3583FE",
        },
        horizontalLine: {
            position: "relative",
            width: "120%",
            marginLeft: "-120px",
            opacity: 0.4,
            border: "1px solid #3583FE",
        },
    };
    const navigate = useNavigate();
const handleNavigate = (url) => {
    handleOpenNavMenu();
    navigate(url);
}
    return (
        <div>
            <div style={styles.linkRow}>
                {links.map((link, index) => (
                    <React.Fragment key={index}>
                        <a onClick={()=> {handleNavigate(link.url)}} style={styles.link}>
                            {link.name}
                        </a>
                        {index !== links.length - 1 && <div style={styles.separator} />}
                    </React.Fragment>
                ))}
            </div>
            <div style={styles.horizontalLine}></div>
        </div>
    );
};
export default LinkRow