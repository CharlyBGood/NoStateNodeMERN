import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Profile" element={<Profile />} />
          {/* esto es donde crear Nota */}
          <Route path="/edit/:id" element={<Profile />} />
          {/* esto es donde editar Nota */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
