import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../HomePage/Homepage.jsx";
import { Register } from "../RegisterPage/Register.jsx";
import { Login } from "../LoginPage/Login.jsx";
import { LogOutPage } from "../LogOut/LogOutPage.jsx";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage loggedIn={loggedIn} />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route
            path="login"
            element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          ></Route>

          <Route
            path="logout"
            element={
              <LogOutPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { App };