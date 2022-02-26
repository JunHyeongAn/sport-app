import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./Component/Intro/Intro";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";

function App() {
  const appKey = "828d603336msh2592b04b6c3cabfp1bfd4djsn0fe352e47219";
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route path="/home" element={<Home appKey={appKey}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
