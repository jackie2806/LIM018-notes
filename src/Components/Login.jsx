import React from 'react';
import union from '../img/union.png';
import logoGoogle from '../img/logoGoogle.png';
import './Login.css';

function Login(){
    return(
        <React.Fragment>
            <div><img className='arrowLogin' src={union} alt='Go back'/></div>
            <h1>Login</h1>
            <form className='formInputsLogin'>
            <div className='inputsLogin'>
            <label className='labelEmailLogin'> Email</label>
             <input className='inputEmailLogin' placeholder='example@gmail.com' type='email'required />
             <label className='labelPasswordLogin'> Password</label> 
             <input className='inputPasswordLogin' type='password' required/>           

            </div>
            <button className='buttonLogin' type='submit' value='Submit'>Log in</button>
           
            </form>        
            <p>-Or log in with Google-</p>
            <div><img className='googleLogin' src={logoGoogle} alt='Login Google'/></div>
        </React.Fragment>
    )
}

export {Login};