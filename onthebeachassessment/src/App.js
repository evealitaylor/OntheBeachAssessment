import './App.css';

import Background from './Images/background.png'

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${Background})`}}>
      {/* <img className="BackgroundImage" src={Background}></img> */}
    </div>
  );
}

export default App;
