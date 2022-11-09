import Book from "../../assets/Book.png" 
import styled from "styled-components"


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


    const StyledDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap:30px;
       
        divBook{
            width:500px;
            margin:0;
            display:flex;
            flex-direction: column;
            align-items:center;
            justify-content: center;

          p{
            position: relative;
            bottom: 390px;
            left:-110px;
          }
        }

        divForm{
          display:flex;
          flex-direction: column;
          align-items:center;
          justify-content: center;
          margin-bottom:100px;

        h2 {
          margin: 20px 0;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-bottom:60px;

            label {
                width: 100%;
                input {
                    width: 100%;
                    border:none;
                    border-bottom:1px solid;
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
            <divBook>
              <img src={Book} alt={"book image"} style={{width:"100%"}}></img>
              <p>Welcome to our<br></br> page! <br></br> <br></br>Please register and <br></br> enjoy your reading!<br></br> 👍</p>
            </divBook>
            <divForm>
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
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
            </divForm>
         </StyledDiv>
        </>
    );

};

export { Register };
