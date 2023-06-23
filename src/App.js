import "./App.css";
import { AppRouts } from "./routes/Route";

import { Toaster } from "react-hot-toast";
import { Feed } from "./pages/feed/Feed";
import { Users } from "./pages/users/Users";

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-right" reverseOrder={false} />
      {/* <Feed /> */}
      <AppRouts />
      {/* <Users /> */}
    </div>
  );
}

export default App;
