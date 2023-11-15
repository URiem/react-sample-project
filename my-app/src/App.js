// import logo from './logo.svg';
// import css from './App.module.css';
import './App.css';

// import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
// import FunctionalGreeting from "./components/FunctionalGreeting";
// import Sidebar from "./components/Sidebar";
import StatefulGreeting from "./components/StatefulGreeting";

function App() {
  return (
    // <div className={css.App}>
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* <FunctionalGreetingWithProps greeting="nice to meet you," name="Mike" age="32"/> */}
      {/* <Sidebar /> */}
      <StatefulGreeting greeting="I'm a stateful class component!" name="Mike"/>
    </div>
  );
}

export default App;
