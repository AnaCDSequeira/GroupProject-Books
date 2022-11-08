
function LogOutPage(props) {
  const { setLoggedIn } = props;

  setLoggedIn(false);
  localStorage.clear()

  return <h3>Came back any time soon! Have a nice day ❤️</h3>
      
}

export { LogOutPage };
