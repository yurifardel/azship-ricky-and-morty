import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components";
import {Home, Episodes} from "./pages";

import './pages/styles/global.scss'

const App: React.FC = () => {
 return(
   <Router>
     <div className="App">
       <Navbar />
     </div>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/episodes" element={<Episodes />} />
     </Routes>
   </Router>
 )
}

export default App