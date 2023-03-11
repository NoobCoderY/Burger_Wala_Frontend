import react from "react"
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Header from "./component/layout/Header";
import Home from "./component/home/Home";
//import css
import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/founder.scss"
import "./styles/menu.scss"


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
          <Route exact path="/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
