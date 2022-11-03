import React from 'react';
import union from '../img/union.png';
import './Register.css';

function Register(){
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
            <p>Do you have an account? Please click here</p>
           
        </React.Fragment>
    )
}
export {Register};
