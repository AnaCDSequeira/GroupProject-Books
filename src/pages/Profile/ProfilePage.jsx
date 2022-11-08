import { useEffect, useState } from "react";

const ProfilePage = (props) => {
    const { loggedIn } = props;
    const [user, setUser] = useState();

    const token = localStorage.getItem(localStorage.key(0));

    useEffect(() => {
        getUser();
    }, []);

    async function getUser() {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
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

        console.log(userDetails);
    }

    function handleSubmitBook(e) {
        e.preventDefault();

        const bookDetails = [
            e.target.bookTitle.value,
            e.target.bookYear.value,
            e.target.bookDescription.value,
            e.target.bookCover.value,
        ];
        console.log(bookDetails);

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
        // alert("Added Book Sucessfully!");
        // console.log(bookDetails);
    }

    return (
        <>
            <div>
                <img src={user?.profile_picture} />
            </div>
            <div>
                <form onSubmit={handleSubmitUser}>
                    <label>
                        Name
                        <input type="text" name="userName" />
                    </label>
                    <label>
                        Email
                        <input type="email" name="userEmail" />
                    </label>
                    <label>
                        Password
                        <input type="password" name="userPassword" />
                    </label>
                    <label>
                        Image
                        <input type="url" name="userImage" />
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
            <div>
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
                        Description
                        <textarea rows="8" cols="50" name="bookDescription" />
                    </label>
                    <label>
                        Book cover <input type="url" name="bookCover" />
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    );
};

export { ProfilePage };
