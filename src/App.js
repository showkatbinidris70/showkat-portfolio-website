import "./App.css";
import Home from "./Home";
import About from "./components/About";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <Header/>
                    <Routes>
                        <Route path="/" exact
                            element={<Home/>}/>
                        <Route path="/about"
                            element={<About/>}/>
                        <Route path="/skills"
                            element={<Skills/>}/>
                        <Route path="/projects"
                            element={<Projects/>}/>
                        <Route path="/contact"
                            element={<Contact/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </Router>
        </div>
    );
}

export default App;
