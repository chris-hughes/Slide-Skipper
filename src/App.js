import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Presentation">
        <p>Name of the presentation</p>
      </div>
      <div className="Controls">
        <button className="SlideNavButton">
          Forward
        </button>
        <button className="SlideNavButton">
          Back
        </button>
      </div>
    </div>
  );
}

export default App;
