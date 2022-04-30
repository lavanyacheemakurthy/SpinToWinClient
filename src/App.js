
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Admin } from "./pages/Admin";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Main } from "./pages/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div className="router-with-header">
      
      <Router className=''>
        <Header></Header>
        
        <div className="router-div">
          <div className="router-content">
            <Routes>
              <Route exact path="/" element={<Main />}/>
              <Route exact path="home" element={<Home />} />
              <Route exact path="dashboard" element={<Dashboard />} />
              <Route exact path="admin" element={<Admin />} />
              <Route exact path="about" element={<About />} />
            </Routes>
          </div>


        </div>
      </Router>
    </div>
  );
}

export default App;