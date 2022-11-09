import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

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
            headers: {
                Authorization: localStorage.getItem(loggedIn.email),
            },
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

    const MainDiv = styled.div`
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap:30px;
        align-items: center;
    
        img {
        height: auto;
        width: 20%;
        box-shadow: -2px 6px 19px 0px #4d4e52;
        margin-top:10px;
        margin-bottom: 10px;
        transition: .3s ease;
        &:hover {
        transform: scale(1.03);
    }
}
        div{
         
          display:inline-block;
          flex-direction: column;
          align-items:center;
          justify-content: center;
          margin:0;
          width: 15%;

        section {
            padding-bottom: 50px;
            padding-left: 10px;
        }

         button {
            border-radius: 50%;
            background: transparent;
            outline: none;
            color: rgb(0, 0, 0);
            box-shadow: 0 2px #89ace4;
            margin: 10px 0px;
            padding: 6px;
            border-radius: 30px;
            text-align: center;
            cursor: pointer;
                
                &:hover {
                    background: linear-gradient(
                        -45deg,
                        #ffffff,
                        rgb(137, 172, 228),
                        rgb(253, 246, 233)
                    );
                    animation: gradient 3s ease infinite;
                    background-size: 400% 400%;
                }
                &:active {
                    box-shadow: 0 3px #1a3562;
                    transform: translateY(2px);
                }
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
    }
    }

    .BookYear{
        font-size: 14px;
    }
        }
`;

    return (
        <>
            <MainDiv>
              
                {/* <h1>BookPage</h1> */}
                <img src={bookData.book_cover} alt={"Book Cover"} />
                <div>
                    <section>
                        <h2>{bookData.title}</h2>
                        <p>by {bookData.description}</p>
                        <h2 className="BookYear">{bookData.year}</h2>
                    </section>
                    <button
                        onClick={handleDeleteBook}
                        disabled={
                            !loggedIn.isLoggedIn || userData.email !== loggedIn.email
                        } style = {{margin:"5px"}}
                    >
                        Delete Book
                    </button>
                    <button
                        onClick={handleShowEditFormBook}
                        disabled={
                            !loggedIn.isLoggedIn || userData.email !== loggedIn.email
                        } style = {{margin:"5px"}}
                    >
                        Edit Book
                    </button>
                    {editFormBook}

                </div>
            </MainDiv>
        </>
    );
};

export { BookPage };
