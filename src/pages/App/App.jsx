import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../HomePage/Homepage.jsx";
import { Register } from "../RegisterPage/Register.jsx";
import { Login } from "../LoginPage/Login.jsx";
import { LogOutPage } from "../LogOut/LogOutPage.jsx";
import { ProfilePage } from "../Profile/ProfilePage.jsx";
import { useState } from "react";
import { BookPage } from "../BookPage/BookPage.jsx";
import {Header} from "../../components//Header.jsx"
import {Footer} from "../../components/Footer.jsx"

function App() {
    const [loggedIn, setLoggedIn] = useState({
        isLoggedIn: false,
        email: null,
    });

    const [books, setBooks] = useState([]);
    return (
        <>
            <BrowserRouter>
                <Header loggedIn={ loggedIn }/>
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
                                setLoggedIn={setLoggedIn}
                            />
                        }
                    ></Route>
                    <Route path="book" element={<BookPage loggedIn={loggedIn} />}>
                        <Route path=":bookId" element={<BookPage />} />
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export { App };
