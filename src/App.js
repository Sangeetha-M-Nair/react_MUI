import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Tour from './pages/Tour';
import Home from './pages/Home';
import SearchAppBar from './components/AppBar';

function App() {
  return (<BrowserRouter>
    <SearchAppBar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/:id" element={<Tour />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
