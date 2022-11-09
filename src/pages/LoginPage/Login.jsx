import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Book from "../../assets/Book.png";

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
                localStorage.setItem("profile_picture",json.data.profile_picture)
                setLoggedIn({ isLoggedIn: true, email: json.data.email });
                const direct = () => navigate("/");
                direct();
                console.log(json)
            } else {
                alert(json.errors);
            }
        }

        loginUser();
    }

    const StyledDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap:30px;
        min-height: 710px; // ver medida do window
       
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
            gap: 30px;

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


        bottomDiv {
          margin-top:10px;

            div {
              margin-top:10px;
              display:flex;
              flex-direction: row;
              justify-content: space-around;      

              span{
                  a{
                    color:rgb(69, 129, 225);
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
              <p>Welcome back to our<br></br> page! <br></br> <br></br>Please login 😁!</p>
              </divBook>
              <divForm>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email
                        <input type="email" name="userEmail" required></input>
                    </label>
                    <label>
                        Password
                        <input
                            type="password"
                            name="userPassword"
                            required
                        ></input>
                    </label>
                    <button type="submit">Login</button>
                </form>
                <bottomDiv>
                    <h6>Or Sign In Using</h6>
                    <div>
                        <span>
                            <a href="#">
                            <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </span>
                        <span>
                            <a href="#">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </span>
                        <span>
                            <a href="#">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </span>
                        <span>
                            <a href="#">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </span>
                        
                    </div>
                </bottomDiv>
                </divForm>
            </StyledDiv>
        </>
    );
};

export { Login };









