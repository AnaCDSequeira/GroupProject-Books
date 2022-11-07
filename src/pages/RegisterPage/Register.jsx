import { Link } from "react-router-dom";

const Register = () => {
  function handleSubmit(e) {
    e.preventDefault();

    const userData = [
      e.target.userName.value,
      e.target.userEmail.value,
      e.target.userPassword.value,
      e.target.userImage.value,
    ];

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      email: userData[1],
      password: userData[2],
      name: userData[0],
      profile_picture: userData[3],
    });

    async function createUser() {
      const response = await fetch(
        "https://ancient-temple-61124.herokuapp.com/api/auth/register",
        {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        }
      );
      const text = await response.text();
      console.log(text);

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
          <input name="userImage"></input>
        </label>
        <button type="submit">Register</button>
      </form>
      <Link to={"/"}>Back to HomePage</Link>
    </>
  );
};

export { Register };
