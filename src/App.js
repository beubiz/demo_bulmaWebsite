import Home from './Home.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";



export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

