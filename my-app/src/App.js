// import logo from './logo.svg';
import css from './App.module.css';
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import FunctionalGreeting from "./components/FunctionalGreeting";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className={css.App}>
      {/* <FunctionalGreeting /> */}
      {/* <FunctionalGreetingWithProps greeting="nice to meet you," name="Mike" age="32"/> */}
      <Sidebar />
    </div>
  );
}

export default App;
