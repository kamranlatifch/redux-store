import logo from "./logo.svg";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
