import React from 'react'
import { useState } from 'react'
import SideImg from '../../assets/Login/login.svg'
import logo from '../../assets/Login/LoginLogo.svg'
import { Link, useNavigate } from "react-router-dom";
import { gql, useMutation } from '@apollo/client';
import './loginStyles.css'
import { useEffect } from 'react';
import '../../App.css'
import { useSnackBar } from '../../hooks/useSnakeBar';

const User_Login = gql`
  mutation UserLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      token
    }
  }
`;


const LoginPage = () => {
  const showPopUp = useSnackBar();
  const navigate = useNavigate()
  const [login, { data, loading, error }] = useMutation(User_Login);
  useEffect(() => {
    if (data!=undefined & !loading & !error){
      console.log(data)
      localStorage.setItem("token",data.login.token)
      showPopUp('Logged In Successfully', "success");
      navigate('/dashboard/reports')
    }
  }, [data])

  const [loginData, setLoginData] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    e.target.name === 'login-email' ? setLoginData({ ...loginData, email: e.target.value }) : setLoginData({ ...loginData, password: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ variables: { email: loginData.email, password: loginData.password } });
      console.log(loginData)
      
      // console.log(error, '123123')
      // console.log(loading)

    } catch (error) {
      console.log(error.message)
      showPopUp(error.message, "error");
    }

  }
  if (loading) return <div style={{ marginTop: '10rem', height: '100vh' }} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;

  return (
    <div className='login-container'>
      <div className='login-container-leftSide' style={{ backgroundImage: `url(${SideImg})` }}></div>
      <div className='login-container-rightSide'>
        <div className='login-logoImg'>
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className='login-innerdiv'>
          <form onSubmit={handleSubmit}>
            <h3>Welcome back</h3>
            <h1>Login to your account</h1>

            <div className='login-input'>
              <label htmlFor="login-email">Email</label>
              <input type="email" name="login-email" id="login-email" onChange={handleChange} placeholder='Enter Email' required />
            </div>
            <div className='login-input'>
              <label htmlFor="login-password">Password</label>
              <input type="password" name="login-password" id="login-password" onChange={handleChange} placeholder='Enter Password' required />
            </div>
            <div className='login-checkBox'>
              <div>
                <input type="checkbox" name="login-checkbox" id="login-checkbox" />
                <label htmlFor="login-checkbox">Remember me</label>
              </div>
              <div>
                <a href="">Forget Password?</a>
              </div>
            </div>
            <button type="submit" >Login Now</button>
          </form>
          <div className='login-JoinFree'>
            Dont have an account? <Link to={'/signup'}>Join free today</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage