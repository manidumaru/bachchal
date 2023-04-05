import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Play from "./components/Play/play";
import Profile from "./components/Profile/profile";
import Learn from "./components/Learn/learn";
import About from "./components/About/about";
import LogIn from "./components/LogIn/login";
import SignUp from "./components/LogIn/signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        {/* <BaghchalBoard></BaghchalBoard> */}

        <Routes>
          <Route path="/" element={<Play />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/learn" element={<Learn />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/log_in" element={<LogIn />}></Route>
          <Route path="/sign_up" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
