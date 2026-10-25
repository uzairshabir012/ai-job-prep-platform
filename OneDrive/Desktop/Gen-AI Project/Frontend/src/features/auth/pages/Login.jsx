import React from 'react'
import "../auth.form.scss"
const Login = () => {
  return (
    <main>
        <div className="form-container">
            <h1>Login</h1>

            <form>

                <div className="input-gorup">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name='email' placeholder='Enter email address'/>
                </div>

                <div className="input-gorup">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name='password' placeholder='Enter password'/>
                </div>

                <button className='button button-primary'>Login</button>

            </form>
        </div>
    </main>

  )
}

export default Login