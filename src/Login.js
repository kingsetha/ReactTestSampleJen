import React from 'react'

function Login() {
  return (
      <div className='app'>
    <h1>Welcome to Relevantz</h1>
    <h1>Hi !!!</h1>
      <label for="uname" role='label'><b>UserName:</b></label>
      <input type='text' role='username' name='uname' required></input>
      <br />
      <label for="psw" role='pwdlabel'><b>Password:</b></label>
      <input type='password' placeholder='Enter Password' role='pwdtext' name='psw' required></input>
      <br />
      <button type='submit' data-testid="login-submit">Login</button>
      <label>
         <input type="checkbox" data-testid="checkbox" checked="checked" name="remember" /> Remember me
      </label>
    </div>
  )
}

export default Login
