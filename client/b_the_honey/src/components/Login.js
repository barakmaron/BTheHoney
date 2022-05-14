import React from 'react';

import '../css/Login.scss';

const Login = () => {
  return (
    <div className="login_block">
      <input type="text" id='user_email' placeHolder="Email" value=""/>
      <label for="user_email">
          Email
      </label>
      <input type="password" id='password' placeHolder="" value=""/>
      <label for="password">
          Password
      </label>
    </div>
  )
}

export default Login
