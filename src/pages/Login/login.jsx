import { useEffect, useState } from "react";
import './loginStyles.css';
import { Typography, Button, IconButton } from "@mui/material";
import backgroundImage from "../../assets/loginBG.jpg";
import CardComponent from "../../components/Card/CardComponent";
import TextFieldComponent from "../../components/Text Field/TextFieldComponent";
import PasswordTextFieldComponent from "../../components/Text Field/PasswordTextField";
import LinkComponent from "../../components/Link/LinkComponent";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackBar } from '../../hooks/useSnakeBar';
import { setWithExpiry, getWithExpiry } from '../../utils/localStorage'
import axios from "axios";

const Login = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  const styles = {
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
    buttonStyle: {
      width: "400px",
      height: "55px",
      borderRadius: "60px",
      background: "linear-gradient(180deg, #FFFFFF 0%, #ACCCFF 100%)",
      color: "black",
      marginTop: "20px",
    },
    signupTextShadow: {
      fontFamily: "Neo Robotix",
      fontSize: "6rem",
      WebkitTextStroke:
        "1px rgba(255, 255, 255, 0.5)" /* Lighter color than white */,
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

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = getWithExpiry('isLoggedIn')
  const navigate = useNavigate();
  const showPopUp = useSnackBar();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_API_URL)
    console.log(username, password)
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        JSON.stringify({ email: username, password }),
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        }
      );
      console.log(response, response.data)
      //Set states in Local Storage
      setWithExpiry('isLoggedIn', true, response.data.expires_in)
      setWithExpiry('User', response.data.user, response.data.expires_in)
      setWithExpiry('Token', response.data.access_token, response.data.expires_in)
      showPopUp('Logged In Successfully', "success");
      navigate("/");
    } catch (err) {
      if (!err?.response) {
        // setErrMsg("No Server Response");
        showPopUp("No Server Response", "error");

        // } else if (err.response?.status === 409) {
        //   setErrMsg("Username Taken");
      } else {
        // setErrMsg("Registration Failed");
        showPopUp("Wrong Email or Password", "error");

      }
      // errRef.current.focus();
    }


  };

  const handleLogout = () => {
    // Perform logout tasks here...
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="loginPage-container" style={styles.root}>
      <CardComponent background="#3583FE" Top="0" MinHeight="30vw" MinWidth="40vw" marginTop={screen.width < 1570 ? "75px" : "0"}>
        <IconButton style={styles.closeButton} onClick={() => navigate("/")}>
          <CloseIcon />
        </IconButton>
        <form onSubmit={handleLogin}>
          <Typography
            className="signupText"
            variant="h5"
            component="h2"
            align="center"
            style={styles.signupTextShadow}
          >
            SIGN IN
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
            SIGN IN
          </Typography>
          <TextFieldComponent
            label="Username"
            variant="outlined"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordTextFieldComponent
            label="Password"
            variant="outlined"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={styles.buttonStyle}
            >
              Login
            </Button>
          </div>
          <Typography
            variant="h6"
            component="h2"
            align="center"
            marginTop="20px"
            style={styles.signUpText}
          >
            <LinkComponent
              href="#"
              marginRight="50px"
              color="white"
              style={styles.signUpLink}
            >
              Forgot password?
            </LinkComponent>
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            align="center"
            style={styles.signUpText}
          >
            Don’t have an account?
            <LinkComponent
              href="/signup"
              color="black"
              style={styles.signUpLink}
            >
              Sign Up
            </LinkComponent>
          </Typography>
        </form>
      </CardComponent>
    </div>
  );
};

export default Login;
