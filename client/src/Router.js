import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./Main";

const Router = createBrowserRouter([
  {
    path: "/",
    elelment: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
    ],
  },
]);

export default Router;
