import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signin from "./pages/sigin";
import Sudo from "./pages/sudo";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/sudo" element={<Sudo />} />
      </Routes>
    </Router>
  );
};

export default Routing;
