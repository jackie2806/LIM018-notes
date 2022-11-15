import React from 'react';
import union from '../img/union.png';
import './Register.css';

function Register(){
    return(
        <React.Fragment>
            <div><img  className='arrowRegister' src={union} alt='Go back'/></div>
            <h1>Register</h1>
            <form className='formInputsRegister'>
            <div className='inputsRegister'>
            <label className='labelEmailRegister'>Email</label>
             <input className='inputEmailRegister' placeholder='example@gmail.com' type='email'required />
             <label className='labelPasswordRegister'>Password</label> 
             <input className='inputPasswordRegister' type='password' required/>           

            </div>
            <button className='buttonRegister' type='submit' value='Submit'>Log in</button>
              
            </form>        
            <p className='textClick'>Do you have an account? Please click here</p>
           
        </React.Fragment>
    )
}
export {Register};
