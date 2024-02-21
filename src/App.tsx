import { Routes, Route } from "react-router-dom";
import Explorer from "./pages/Explorer/Explorer";
import Analytics from "./pages/Analytics/Analytics";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Explorer />} />
      <Route path="/explorer" element={<Explorer />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
}

export default App;
