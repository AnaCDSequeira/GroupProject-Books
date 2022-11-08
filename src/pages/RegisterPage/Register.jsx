import { Link } from "react-router-dom";

const Register = () => {
    function handleSubmit(e) {
        e.preventDefault();

        const userData = JSON.stringify({
            email: e.target.userEmail.value,
            password: e.target.userPassword.value,
            name: e.target.userName.value,
            profile_picture: e.target.userImage.value,
        });

        async function createUser() {
            const response = await fetch(
                "https://ancient-temple-61124.herokuapp.com/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: userData,
                    redirect: "follow",
                }
            );

            const text = await response.text();
            const json = JSON.parse(text);

            if (json.message === "OK") {
                alert("Registered sucessefully!");
            } else {
                alert(json.errors);
            }
        }
        createUser();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input type="text" name="userName" required></input>
                </label>
                <label>
                    Email
                    <input type="email" name="userEmail" required></input>
                </label>
                <label>
                    Password
                    <input type="password" name="userPassword" required></input>
                </label>
                <label>
                    Image
                    <input type="url" name="userImage"></input>
                </label>
                <button type="submit">Register</button>
            </form>
        </>
    );
};

export { Register };
