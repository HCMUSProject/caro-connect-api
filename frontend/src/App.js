import React from 'react';
import './App.css';
// import GameContainer from './containers/GameContainer';
import WrappedRegisterForm from './components/login_register/Register';

function App() {
  return (
    <div className='App'>
      {/* <GameContainer /> */}
      <WrappedRegisterForm />
    </div>
  );
}

export default App;
