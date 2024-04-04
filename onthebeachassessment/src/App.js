import './App.css';

import Hotel from './Hotels/Hotel';

import Background from './Images/background.png'

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${Background})`, width:"100%", height:"100vh"}}>
      <Hotel/>
    </div>
  );
}

export default App;
