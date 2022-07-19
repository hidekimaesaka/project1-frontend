import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signin from "./pages/sigin";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default Routing;
