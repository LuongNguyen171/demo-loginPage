import './login.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import BackgroundImage from '../../assets/backgroundImage';
import Squares from '../../assets/squares';
import TranslateButton from '../../assets/translateButon';
import { useEffect, useState } from 'react';
import { handleLogin } from '../../callApi';
import { useDispatch } from 'react-redux';
import { isLogin } from '../../redux/reducers';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginState, setIsLoginState] = useState();
  const [message, setMessage] = useState('');
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleClickLoginBtn = async () => {
    const responMessage = await handleLogin(username, password);
    if (responMessage) {
      setMessage('');
    } else {
      setMessage('Đăng nhập thất bại!');
    }
    setIsLoginState(responMessage);
    dispath(isLogin.actions.IS_LOGIN_REDUCER(responMessage));
  };

  useEffect(() => {
    if (isLoginState) {
      navigate('/home');
    }
  }, [isLoginState]);
  return (
    <div className="login">
      <div className="container">
        <form className="form">
          <img
            className="logo"
            src="https://www.tmasolutions.com/_next/image?url=%2FTMA-favicon.webp&w=384&q=100"
          ></img>
          <div className="inputContainer">
            <h2 className="loginTitle">Log in</h2>
            <div className="inputItem">
              <p className="textInput">Email</p>
              <div className="input">
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                  }}
                >
                  <TextField
                    fullWidth
                    focused
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="your email"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    sx={{
                      '& label': {
                        color: 'white',
                      },
                      '& input': {
                        color: 'white',
                      },
                      '& .MuiInput-underline:before': {
                        borderBottomColor: 'white',
                      },
                      '& .MuiInput-underline:after': {
                        borderBottomColor: 'white',
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlinedIcon
                            sx={{
                              color: 'white',
                              mr: 1,
                              my: 0.5,
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </div>
            </div>
            <div className="inputItem">
              <p className="textInput">Password</p>
              <div className="input">
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                  }}
                >
                  <TextField
                    fullWidth
                    focused
                    placeholder="Your password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    sx={{
                      '& label': {
                        color: 'white',
                      },
                      '& input': {
                        color: 'white',
                      },
                      '& .MuiInput-underline:before': {
                        borderBottomColor: 'white',
                      },
                      '& .MuiInput-underline:after': {
                        borderBottomColor: 'white',
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <HttpsOutlinedIcon
                            sx={{
                              color: 'white',
                              mr: 1,
                              my: 0.5,
                            }}
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <VisibilityOffOutlinedIcon
                            sx={{
                              color: 'white',
                              mr: 1,
                              my: 0.5,
                            }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </div>
              <p className="message">{message}</p>
            </div>
          </div>
          <div className="textBottom">
            <div className="checkboxContainer">
              <Checkbox defaultChecked />
              <p>Remember me</p>
            </div>
            <a>forgot Password?</a>
          </div>
          <Button
            className="btnLogin"
            variant="contained"
            onClick={handleClickLoginBtn}
          >
            Log in
          </Button>
          <div className="footer">
            <div className="footerText">
              <p>Don't have an account yet?</p>
              <a>Sign Up</a>
            </div>
          </div>
          <div className="footerTranslate">
            <TranslateButton />
          </div>
        </form>

        <div className="bacground">
          <div className="circle"></div>
          <BackgroundImage className={'backgroundImgage'} />
          <Squares className={'squares'} />
          <Squares className={'squares1'} />

          <div className="textBacground">
            <h2>Welcome to TMA Innovation</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              eget blandit nisl.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
