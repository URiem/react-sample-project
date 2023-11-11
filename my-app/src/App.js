import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import FunctionalGreeting from "./components/FunctionalGreeting";

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="nice to meet you," name="Mike" age="32"/>
    </div>
  );
}

export default App;
