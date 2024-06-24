import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import WorkoutLogger from "./pages/WorkoutLogger.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/workout-logger" element={<WorkoutLogger />} />
      </Routes>
    </Router>
  );
}

export default App;
