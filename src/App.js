import logo from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  const options = ["Yes","Probably not"];
  return (
    <div className="App">
      <Dropdown options = {options}/>
    </div>
  );
}

export default App;
