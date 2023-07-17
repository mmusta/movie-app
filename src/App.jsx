import React from 'react';
import NavigationBar from './components/NavigationBar';
import S from './index.module.css';

function App() {
  return (
    <div className={S.App}>
      <NavigationBar/>
      Hello SecondWorld....
    </div>
  );
}

export default App;
