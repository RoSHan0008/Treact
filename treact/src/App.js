import "./App.css";
import Header from "./component/Header";
import HomeBody from "./component/HomeBody";
import TrackRecord from "./component/TrackRecord";

function App() {
  return (
    <div className="App">
      <div className="Home_container">
        <div className="Home_sub_container">
          <Header />
          <HomeBody />
        </div>
      </div>
      <TrackRecord/>
    </div>
  );
}

export default App;
