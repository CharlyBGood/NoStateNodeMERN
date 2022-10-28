import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import UsersTable from "./components/UsersTable";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Users" element={<UsersTable />} />
            <Route path="/Profile" element={<Profile />} />
            {/* esto es donde crear Nota */}
            <Route path="/edit/:id" element={<Profile />} />
            {/* esto es donde editar Nota */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
