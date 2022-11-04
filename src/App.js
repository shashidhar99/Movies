import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Components/Header/Header';
import Home from "./Pages/Home/Home"
import MovieList from './Components/MovieList/MovieList';
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path ="Movie/:id" element={<h1>Details page</h1>}></Route>
          <Route path ="Movies/:type" element={<MovieList />}></Route>
          <Route path ="/*" element={<h1>Error</h1>}></Route>

        </Routes>

    </Router>
      
    </div>
  );
}

export default App;