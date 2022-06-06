import Nav from './Components/ReusableComponents/Nav'
import Home from './Components/Home'
import Artists from './Components/Artists';


function App() {
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Artists />
      </div>
    </div>
  );
}

export default App;
