import { useEffect, useState } from "react";
import styled from "styled-components";

const ProfilePage = (props) => {
    const { loggedIn } = props;
    const [user, setUser] = useState({});

    const token = localStorage.getItem(localStorage.key(0));

    useEffect(() => {
        getUser();
    }, []);

    async function getUser() {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            redirect: "follow",
        };

        console.log(requestOptions);

        const response = await fetch(
            "https://cors-anywhere.herokuapp.com/ancient-temple-61124.herokuapp.com/api/user/profile",
            requestOptions
        );

        const json = await response.json();
        const data = json.data;
        setUser(data);
    }

    function handleSubmitUser(e) {
        e.preventDefault();

        const userDetails = [
            e.target.userName.value,
            e.target.userEmail.value,
            e.target.userPassword.value,
            e.target.userImage.value,
        ];

        const myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem(loggedIn.email));
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            email: userDetails[1],
            password: userDetails[2],
            name: userDetails[0],
            profile_picture: userDetails[3],
        });

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        async function updateUser() {
            const response = await fetch(
                "https://cors-anywhere.herokuapp.com/ancient-temple-61124.herokuapp.com/api/user/profile",
                requestOptions
            );
            const json = await response.json();
            console.log(json);
        }

        updateUser();

    }

    function handleSubmitBook(e) {
        e.preventDefault();

        const bookDetails = [
            e.target.bookTitle.value,
            e.target.bookYear.value,
            e.target.bookDescription.value,
            e.target.bookCover.value,
        ];
       

        const myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem(loggedIn.email));
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            title: bookDetails[0],
            description: bookDetails[2],
            year: parseInt(bookDetails[1]),
            book_cover: bookDetails[3],
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        async function addBook() {
            const response = await fetch(
                "https://cors-anywhere.herokuapp.com/ancient-temple-61124.herokuapp.com/api/book/",
                requestOptions
            );

            const json = await response.json();
            if (json.message === "OK") {
                alert("Registered sucessefully!");
            } else {
                alert(json.errors);
            }
        }

        addBook();

        e.target.bookTitle.value = null;
        e.target.bookYear.value = null;
        e.target.bookDescription.value = null;
        e.target.bookCover.value = null;
    }

    const StyledDiv = styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 200px;
        gap: 200px;
        margin-top:42px;

        profileDataContainerDiv {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                height: 400px;
                margin: 0px 100px;
                box-shadow: 0 0 20px 5px rgba(169, 154, 138, 0.7);
            }
            userDataContainerDiv {
                display: flex;
                flex-direction: column;
                align-items: center;
                h2 {
                    margin: 20px 0;
                }
                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 30px;

                    label {
                        width: 100%;
                        input {
                            width: 100%;
                            border: none;
                            border-bottom: 1px solid;
                            background: rgb(253, 246, 233);
                        }
                    }
                    button {
                        border-radius: 50%;
                        background: transparent;
                        outline: none;
                        color: rgb(0, 0, 0);
                        box-shadow: 0 5px #89ace4;
                        margin: 10px 0px;
                        padding: 6px;
                        border-radius: 30px;
                        width: 100%;
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
                }
            }
        }
        newBookContainerDiv {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-right: 100px;

            h2 {
                margin: 20px 0;
            }
            form {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 30px;

                label {
                    width: 100%;
                    input {
                        width: 100%;
                        border: none;
                        border-bottom: 1px solid;
                        background: rgb(253, 246, 233);
                    }
                }

                button {
                    border-radius: 50%;
                    background: transparent;
                    outline: none;
                    color: rgb(0, 0, 0);
                    box-shadow: 0 5px #89ace4;
                    margin: 10px 0px;
                    padding: 6px;
                    border-radius: 30px;
                    width: 100%;
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
            }
        }
    `;

    return (
        <>
            <StyledDiv>
                <profileDataContainerDiv>
                    <img src={user
                        .profile_picture} />
                    <userDataContainerDiv>
                        <h2>My Profile</h2>
                        <form onSubmit={handleSubmitUser}>
                            <label>
                                Name
                                <input
                                    type="text"
                                    name="userName"
                                />
                            </label>
                            <label>
                                Email
                                <input
                                    type="email"
                                    name="userEmail"
                                />
                            </label>
                            <label>
                                Password
                                <input type="password" name="userPassword" />
                            </label>
                            <label>
                                Image
                                <input
                                    type="url"
                                    name="userImage"
                                />
                            </label>
                            <button type="submit">Send</button>
                        </form>
                    </userDataContainerDiv>
                </profileDataContainerDiv>
                <newBookContainerDiv>
                    <h2>Add a New Book</h2>
                    <form onSubmit={handleSubmitBook}>
                        <label>
                            Title
                            <input type="text" name="bookTitle" />
                        </label>
                        <label>
                            Year
                            <input type="text" name="bookYear" />
                        </label>
                        <label>
                            Author
                            <input type="text" name="bookDescription" />
                        </label>
                        <label>
                            Book cover <input type="url" name="bookCover" />
                        </label>
                        <button type="submit">Send</button>
                    </form>
                </newBookContainerDiv>
            </StyledDiv>
        </>
    );
};

export { ProfilePage };
