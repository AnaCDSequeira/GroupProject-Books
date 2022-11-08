import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header.jsx";

const BookPage = (props) => {
    const { loggedIn } = props;
    const { bookId } = useParams();
    const [bookData, setBookData] = useState({});
    const [userData, setUserBookData] = useState({});
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchBook() {
            const response = await fetch(
                `https://ancient-temple-61124.herokuapp.com/api/book/${bookId}`
            );
            const json = await response.json();
            const data = json.data;
            const userData = data.user;
            setBookData(data);
            setUserBookData(userData);
        }

        fetchBook();
    }, []);

    const handleDeleteBook = () => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem(loggedIn.email));

        const requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow",
        };

        async function deleteBook() {
            const response = await fetch(
                `https://cors-anywhere.herokuapp.com/ancient-temple-61124.herokuapp.com/api/book/${bookId}`,
                requestOptions
            );
            const json = await response.json();
            console.log(json);
        }
        deleteBook();
        alert("Book has been deleted with success!");
        navigate("/");
    };

    const handleShowEditFormBook = () => {
        setShowForm(true);
    };

    const handleEditBook = (e) => {
        e.preventDefault();
        const newBookData = {
            title: e.target.title.value,
            year: e.target.year.value,
            description: e.target.description.value,
            book_cover: e.target.book_cover.value,
        };
        const myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem(loggedIn.email));
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            title: newBookData.title,
            year: parseInt(newBookData.year),
            description: newBookData.description,
            book_cover: newBookData.book_cover,
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        async function editBook() {
            const response = await fetch(
                `https://cors-anywhere.herokuapp.com/ancient-temple-61124.herokuapp.com/api/book/${bookId}`,
                requestOptions
            );
            const json = await response.json();
            console.log(json);
        }
        editBook();
    };

    let editFormBook;
    if (showForm) {
        editFormBook = (
            <div>
                <form onSubmit={handleEditBook}>
                    <label>
                        Title
                        <input type="text" name="title" required />
                    </label>
                    <label>
                        Year
                        <input type="text" name="year" required />
                    </label>
                    <label>
                        Description
                        <textarea
                            rows="8"
                            cols="50"
                            name="description"
                            required
                        />
                    </label>
                    <label>
                        Book cover{" "}
                        <input type="url" name="book_cover" required />
                    </label>
                    <button>Update Book</button>
                </form>
            </div>
        );
    }

    return (
        <>
            <Link to="/">HomePage</Link>

            <h1>BookPage</h1>
            <img src={bookData.book_cover} alt="" />
            <div>
                <h2>{bookData.id}</h2>
                <p>{bookData.description}</p>
                <h2>{bookData.year}</h2>
            </div>
            <button
                onClick={handleDeleteBook}
                disabled={
                    !loggedIn.isLoggedIn || userData.email !== loggedIn.email
                }
            >
                Delete Book
            </button>
            <button
                onClick={handleShowEditFormBook}
                disabled={
                    !loggedIn.isLoggedIn || userData.email !== loggedIn.email
                }
            >
                Edit Book
            </button>
            {editFormBook}
        </>
    );
};

export { BookPage };
