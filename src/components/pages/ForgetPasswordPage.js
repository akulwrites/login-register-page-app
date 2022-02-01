import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ForgetPasswordPage() {
    return (
        
        <div className="text-center m-5-auto" >
            <h2>Reset your password</h2>
            <h5>Enter your email address and we will send you a reset password email.</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send reset passsword email</button>
                </p>
            </form>
            <footer>
                <p>New to our family? <Link to="/register">Create an account</Link></p>
                <p><Link to="/">Back to Homepage</Link></p>
            </footer>
        </div>
    )
}

