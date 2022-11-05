import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/Homepage";
import { Register } from "./pages/RegisterPage/Register.jsx";
import { Login } from "./pages/LoginPage/Login.jsx";

const appContainer = document.getElementById("app");
const root = createRoot(appContainer);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="login" element={<Login />}></Route>
    </Routes>
  </BrowserRouter>
);
