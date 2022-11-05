import { createRoot } from "react-dom/client";
import { App } from "./pages/App/App.jsx";

const appContainer = document.getElementById("app");
const root = createRoot(appContainer);

root.render(<App />);
