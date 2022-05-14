import React from 'react';

import Button from './Button';

import '../css/Register.scss';

const Register = () => {
  return (
    <div className="register_block">
        <div>
            <input type="email" id='user_email' placeholder=" " required/>
            <label htmlFor="user_email">
                Email
            </label>
        </div>
        <div>
            <input type="text" id='full_name' placeholder=" " pattern="[^' ']+" required/>
            <label htmlFor="full_name">
                Full name
            </label>
        </div>
        <div>
            <input type="password" id='password' placeholder=" " required/>
            <label htmlFor="password">
                Password
            </label>
        </div>
        <div>
            <Button id="Register" text="Register" onClick={() => {}}></Button>
        </div>
    </div>
  )
}

export default Register
