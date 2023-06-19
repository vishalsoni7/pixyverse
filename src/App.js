import "./App.css";
import { AppRouts } from "./routes/Route";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="bottom-right" reverseOrder={false} />
      <AppRouts />
    </div>
  );
}

export default App;
