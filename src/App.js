import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing/Landing";
import { Signin } from "./pages/signin/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
