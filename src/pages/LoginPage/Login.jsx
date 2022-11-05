import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const { loggedIn, setLoggedIn } = props;

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const userData = [e.target.userEmail.value, e.target.userPassword.value];

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      email: userData[0],
      password: userData[1],
    });

    async function loginUser() {
      const response = await fetch(
        "https://ancient-temple-61124.herokuapp.com/api/auth/login",
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
        alert(`Login sucessefully! Welcome ${json.data.name}`);
        localStorage.setItem(json.data.email, json.data.token);
        setLoggedIn(true);
        const direct = () => navigate("/");
        direct();
      } else {
        alert(json.errors);
      }
    }
    loginUser();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="userEmail" required></input>
        </label>
        <label>
          Password
          <input type="password" name="userPassword" required></input>
        </label>
        <button type="submit">Login</button>
      </form>
      <Link to={"/"}>Back to HomePage</Link>
    </>
  );
};

export { Login };
