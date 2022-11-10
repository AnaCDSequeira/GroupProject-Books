import End from "../../assets/TheEnd.png";
import Book from "../../assets/Book.png";
import styled from "styled-components";


function LogOutPage(props) {
  const { setLoggedIn } = props;

  setLoggedIn(false);
  localStorage.clear();


  const StyledDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap:30px;
        min-height: 70vh;
        margin-top:-50px;
        
        
        divBook{
            width:30%;
            margin:0;
            display:flex;
            align-items:center;
            justify-content: center;
            position:relative;

          p{
            position: absolute;
            left:60px;
            top:120px;
          }

          #endImage{
            position: absolute;
            right:-70px;
            width:80%;
          }
        }
      `

  return (
    <>
      <StyledDiv>
          <divBook>
            <img src={Book} alt={"book image"} style={{width:"100%"}}></img>
            <img id="endImage" src={End} alt={"end image"}></img>
            <p>Come back any <br />time soon! ❤️</p>
          </divBook>
      </StyledDiv>           
    </>
  );
}

export { LogOutPage };
