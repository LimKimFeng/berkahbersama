import './App.css';
import Landing from './component/landing/index';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BantuanForm from "./component/form/BantuanForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/bantuan" element={<BantuanForm />} />
      </Routes>
    </Router>
  );
}

export default App;
