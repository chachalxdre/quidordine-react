import "./index.css";
import PageTest from "./pages/pageTest";
import Footer from "./components/Footer";
import {HashRouter, Routes, Route} from "react-router-dom";

//Display our website

function App() {
  return (
    <HashRouter>
        <Routes>
        <Route exact path='/' element={<PageTest/>} />
          <Route exact path='/' element={<Footer/>} />
        </Routes>
    </HashRouter> 
  );
}

export default App;