import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/home/Home";
import OnBoardUi from "./pages/onboard/OnBoardUi";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/onBoard" element={<OnBoardUi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
