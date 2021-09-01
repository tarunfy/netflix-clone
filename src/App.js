import "./App.css";
import Row from "./Row";
import requests from "./requests";
function App() {
  return (
    <div className="App">
      <h1>Hi 🤡</h1>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    </div>
  );
}

export default App;
