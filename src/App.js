import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing/Landing";
import { Signin } from "./pages/signin/SignIn";
import { SignUp } from "./pages/signup/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
