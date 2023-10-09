import axios from 'axios';

export const handleLogin = async (username, password) => {
  try {
    const response = await axios.post(
      'https://iot.tanthanhcontainer.com/api/auth/login',
      {
        username: username,
        password: password,
      },
    );

    const tokenInfo = {
      token: response.data.token,
      refreshToken: response.data.refreshToken,
    };
    localStorage.setItem('accessToken', JSON.stringify(tokenInfo));

    return true;
  } catch (error) {
    console.error(' login err', error);

    // console.log(error.response.data.message)

    return false;
  }
};
