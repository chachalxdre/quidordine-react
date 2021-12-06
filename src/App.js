import "./index.css";
import Recette from "./pages/Recette";
import {HashRouter, Routes, Route} from "react-router-dom";

//Display our website

function App() {
  return (
    <HashRouter>
        <Routes>
        <Route exact path='/' element={<Recette/>} />
        </Routes>
    </HashRouter> 
  );
}

export default App;