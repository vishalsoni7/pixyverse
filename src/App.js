import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import { AppRouts } from "./routes/Route";
import { Toaster } from "react-hot-toast";
import { SideBar } from "./pages/sidebar/SideBar";
import { Users } from "./pages/users/Users";

function App() {
  const { isSignIn } = useContext(AuthContext);
  return (
    <div className="App">
      <Toaster position="bottom-right" reverseOrder={false} />
      {isSignIn && <SideBar />}
      <AppRouts />
      {isSignIn && <Users />}
    </div>
  );
}

export default App;
