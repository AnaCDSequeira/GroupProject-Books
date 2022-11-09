import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const { loggedIn, setLoggedIn } = props;

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    let userData = JSON.stringify({
      email: e.target.userEmail.value,
      password: e.target.userPassword.value,
    });

    async function loginUser() {
      const response = await fetch(
        "https://ancient-temple-61124.herokuapp.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: userData,
          redirect: "follow",
        }
      );

      const text = await response.text();
      const json = JSON.parse(text);

      if (json.message === "OK") {
        alert(`Login sucessefully! Welcome ${json.data.name}`);
        localStorage.setItem(json.data.email, json.data.token);
        setLoggedIn({ isLoggedIn: true, email: json.data.email });
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
    </>
  );
};

export { Login };
