import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import AboutPage from "./screens/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" elemant={<HomePage />} />
        <Route path="/about" elemant={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
