//import logo from './logo.svg';
//import './App.css';


import React from 'react';
import {Init} from './Components/Init';
import {Register} from './Components/Register';
import {Login} from './Components/Login';
import {Wall} from './Components/Wall';
import {CreateNoteButton} from './Components/CreateNoteButton';
import {Note} from './Components/Note';
function App() {
  return (
    <React.Fragment>
     {/*   <Init/> */}
     
       <Login/>
    
      {/*<Register/>*/}
 
      {/* <Wall>        
        <Note/>                
        <CreateNoteButton/>
      </Wall> */}
    </React.Fragment>
   
  );
}

export default App;
