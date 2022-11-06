import { useEffect } from "react";

function ProfilePage(props) {
  //   const { loggedIn } = props;

  //   const myHeaders = new Headers();

  //   myHeaders.append("Authorization", localStorage.getItem(loggedIn.email));

  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };

  //   useEffect(() => {
  //     async function getUser() {
  //       const response = await fetch(
  //         "https://ancient-temple-61124.herokuapp.com/api/user/profile",
  //         requestOptions
  //       );
  //       const text = await response.text();
  //       console.log(text);
  //     }
  //     getUser();
  //   }, []);

  return (
    <>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <form action="">
          <label>Name</label>
        </form>
      </div>
      <div>
        <form action=""></form>
      </div>
    </>
  );
}

export { ProfilePage };
