import React from "react";
import { Route,BrowserRouter as Router,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home,About,Projects,Contact,Classes } from "./pages";

const App=()=>
{
    return (
        <main className="bg-slate-300/20 h-full">
            <Router>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/classes" element={<Classes />} />
                    </Routes>
                
            </Router>
        </main>
     
       
    )
}
export default App