import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;