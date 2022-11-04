import { createRoot } from "react-dom/client";

const appContainer = document.getElementById("app");
const root = createRoot(appContainer);

const App = () => {
  return <h1>Hello world</h1>;
};

root.render(<App />);
