import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing/Landing";
import { Signin } from "./pages/signin/SignIn";
import { SignUp } from "./pages/signup/SignUp";
import { UserFeed } from "./pages/userfeed/UserFeed";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userfeed" element={<UserFeed />} />
      </Routes>
    </div>
  );
}

export default App;
