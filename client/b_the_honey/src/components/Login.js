import React from 'react';

import '../css/Login.scss';
import Button from './Button';

const Login = () => {
  return (
    <div className="login_block">
        <div>
            <input type="email" id='user_email' placeholder=" " required/>
            <label htmlFor="user_email">
                Email
            </label>
        </div>
        <div>
            <input type="password" id='password' placeholder=" " required/>
            <label htmlFor="password">
                Password
            </label>
        </div>
        <div>
            <Button id="Login" text="Login" onClick={() => {}}></Button>
        </div>
    </div>
  )
}

export default Login
