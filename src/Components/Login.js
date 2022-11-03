import React from 'react';
import union from '../img/union.png';
import logoGoogle from '../img/logoGoogle.png';
import './Login.css';

function Login(){
    return(
        <React.Fragment>
            <div><img src={union} alt='Go back'/></div>
            <form className='formInputs'>
            <div>
            <label> Email</label>
             <input placeholder='example@gmail.com' type='email'required />
             <label> Password</label> 
             <input type='password' required/>           

            </div>
            <button type='submit' value='Submit'>Log in</button>
           
            </form>        
            <p>-Or log in with Google-</p>
            <div><img src={logoGoogle} alt='Login Google'/></div>
        </React.Fragment>
    )
}

export {Login};