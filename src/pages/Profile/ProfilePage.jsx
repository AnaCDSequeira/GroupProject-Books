import { useEffect, useState } from "react";

function ProfilePage(props) {
  const { loggedIn } = props;
  const [user, setUser] = useState();

  const myHeaders = new Headers();

  myHeaders.append("Authorization", localStorage.getItem(loggedIn.email));

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/ancient-temple-61124.herokuapp.com/api/user/profile",
        requestOptions
      );
      const json = await response.json();
      setUser(json);
      console.log(user);
    }
    getUser();
  }, []);

  return (
    <>
      <div>
        <img src={user.data.profile_picture} alt={user.data.name} />
      </div>
      <div>
        <form action="">
          <label>
            Name
            <input type="text" />
          </label>
          <label>
            Email
            <input type="email" />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
          <label>
            Image
            <input type="url" />
          </label>
          <button>Send</button>
        </form>
      </div>
      <div>
        <form action="">
          <label>
            Title
            <input type="text" />
          </label>
          <label>
            Year
            <input type="text" />
          </label>
          <label>
            Description
            <textarea rows="8" cols="50" />
          </label>
          <label>
            Book cover <input type="url" />
          </label>
          <button>Send</button>
        </form>
      </div>
    </>
  );
}

export { ProfilePage };
