import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../HomePage/Homepage.jsx";
import { Register } from "../RegisterPage/Register.jsx";
import { Login } from "../LoginPage/Login.jsx";
import { LogOutPage } from "../LogOut/LogOutPage.jsx";
import { ProfilePage } from "../Profile/ProfilePage.jsx";
import { useState } from "react";
import { BookPage } from "../BookPage/BookPage.jsx";

function App() {
    const [loggedIn, setLoggedIn] = useState({
        isLoggedIn: false,
        email: null,
    });

    const [books, setBooks] = useState([]);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                loggedIn={loggedIn}
                                books={books}
                                setBooks={setBooks}
                            />
                        }
                    ></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route
                        path="login"
                        element={
                            <Login
                                loggedIn={loggedIn}
                                setLoggedIn={setLoggedIn}
                            />
                        }
                    ></Route>
                    <Route
                        path="profile"
                        element={<ProfilePage loggedIn={loggedIn} />}
                    ></Route>
                    <Route
                        path="logout"
                        element={
                            <LogOutPage
                                loggedIn={loggedIn}
                                setLoggedIn={setLoggedIn}
                            />
                        }
                    ></Route>
                    <Route path="book" element={<BookPage loggedIn={loggedIn} />}>
                        <Route path=":bookId" element={<BookPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export { App };
