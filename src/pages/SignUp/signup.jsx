import { useEffect, useState } from "react";
import { Typography, Button, Divider, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/SignupImg.svg";
import CardComponent from "../../components/Card/CardComponent";
import TextFieldComponent from "../../components/Text Field/TextFieldComponent";
import PasswordTextFieldComponent from "../../components/Text Field/PasswordTextField";
import LinkComponent from "../../components/Link/LinkComponent";
import ResponsiveAppBar from "../../components/header";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackBar } from '../../hooks/useSnakeBar';
import { SIGN_IN } from "../../constants"
import axios from "axios";


const SignUp = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  const styles = {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      // width: "1400px",
      backgroundColor: "#000B1C",
    },
    signUpText: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "normal",
      fontSize: "1rem",
    },
    signUpLink: {
      color: "black",
      marginLeft: "6px",
      fontWeight: "normal",
      fontSize: "1rem",
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "10px",
    },
    lineStyle: {
      width: "244px",
      color: "white",
      borderBottom: "1px solid",
      borderWidth: "0.5px",
    },
    buttonContainerStyle: {
      display: "flex",
      justifyContent: "center",
    },
    buttonStyle: {
      width: "400px",
      height: "55px",
      borderRadius: "60px",
      background: "linear-gradient(180deg, #FFFFFF 0%, #ACCCFF 100%)",
      color: "black",
      marginTop: "20px",
    },
    iconButton: {
      width: "20px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "#5b93ed",
      marginLeft: "5px",
      marginRight: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    iconContainer: {
      display: "flex",
      justifyContent: "center",
      marginTop: "10px",
      alignItems: "center",
      width: "100%",
    },
    signupTextShadow: {
      fontFamily: "Neo Robotix",
      fontSize: "6rem",
      WebkitTextStroke: "1px rgba(255, 255, 255, 0.5)",
      WebkitTextFillColor: "transparent",
      marginBottom: "20px",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      width: "30px",
      height: "30px",
      color: "white",
    },
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const showPopUp = useSnackBar();


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic here...
    console.log("Form submitted");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        JSON.stringify({ name, email, password }),
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        }
      );
      //Set states in Local Storage

      showPopUp('Registered Successfully', "success");
      navigate(`${SIGN_IN}`);
    } catch (err) {
      if (!err?.response) {
        // setErrMsg("No Server Response");
        showPopUp("No Server Response", "error");

        // } else if (err.response?.status === 409) {
        //   setErrMsg("Username Taken");
      } else {
        // setErrMsg("Registration Failed");
        showPopUp("Email/Username Already Taken", "error");

      }
      // errRef.current.focus();
    }

  };

  return (
    <div style={styles.root}>
      <ResponsiveAppBar />
      <CardComponent height="600px" Top="0" background="#3583FE" marginTop={screen.width < 1570 ? "75px" : "0"}>
        <IconButton style={styles.closeButton} onClick={() => navigate("/")}>
          <CloseIcon />
        </IconButton>
        <form onSubmit={handleSubmit}>
          <Typography
            className="signupText"
            variant="h5"
            component="h2"
            align="center"
            style={styles.signupTextShadow}
          >
            SIGN UP
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            align="center"
            color="white"
            style={{ fontFamily: "Neo Robotix" }}
            marginTop="-117px"
            marginBottom="15px"
            fontSize="3.5rem"
          >
            SIGN UP
          </Typography>
          <TextFieldComponent
            label="Name"
            variant="outlined"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextFieldComponent
            label="Email"
            variant="outlined"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordTextFieldComponent
            label="Password"
            variant="outlined"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div style={styles.buttonContainerStyle}>
            <Button type="submit" variant="contained" style={styles.buttonStyle}>
              Sign Up
            </Button>
          </div>
        </form>

        <Typography
          variant="h6"
          component="h2"
          align="center"
          style={styles.signUpText}
        >
          Already have an account?
          <LinkComponent href="./login" color="black" style={styles.signUpLink}>
            Log In
          </LinkComponent>
        </Typography>
        <div style={styles.container}>
          <Divider style={styles.lineStyle} />
          <Typography variant="body1" align="center" color="white">
            OR
          </Typography>
          <Divider style={styles.lineStyle} />
        </div>
        <div style={styles.iconContainer}>
          <Button
            style={styles.iconButton}
            variant="contained"
            startIcon={<FacebookIcon style={{ fontSize: "25px", marginLeft: "10px" }} />}
          />
          <Button
            style={styles.iconButton}
            variant="contained"
            startIcon={<GoogleIcon style={{ fontSize: "25px", marginLeft: "10px" }} />}
          />
        </div>
      </CardComponent>
    </div>
  );
};

export default SignUp;
