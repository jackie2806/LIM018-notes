import React from 'react';
import takeNotes from '../img/takeNotes.png'
import './Init.css';
function Init () {
 return (
   <React.Fragment>
      <img src={takeNotes} alt='logo'/>
      <div className='divContainerButtons'>
      <button className='logIn'>Log In</button>
      <button className='register'>Register</button>
      </div>
      
   </React.Fragment>
     
 )
}

export {Init};

