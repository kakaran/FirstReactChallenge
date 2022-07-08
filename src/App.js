import React from 'react';
import Card1 from "./Card1"
import Card2 from './Card2';
import Card3 from './Card3';
import "./Card.css"
// flex flex-row items-center
function App() {
  return (
    <React.Fragment>
      <div className="IconContanier">
          <Card1/>
          <Card2/>
          <Card3/>
      </div>
    </React.Fragment>
  );
}

export default App;
