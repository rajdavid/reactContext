import React from 'react';
import './App.css';
import ComponentC from './component/ComponentC';
import { UserProvider } from './component/userContext';

function App() {
  return (
    <div className="App">
      Hey User u will be studying advance react
      <UserProvider value="david">
        <ComponentC/>
        </UserProvider>
    </div>
  );
}

export default App;
