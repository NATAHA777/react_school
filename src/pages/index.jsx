import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import About from "./About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "news",
        element: <div>news</div>,
      },
      {
        path: "calender",
        element: <div>calender</div>,
      },
      {
        path: "shedule",
        element: <div>shedule</div>,
      },
      {
        path: "elzhur",
        element: <div>elzhur</div>,
      },
      {
        path: "settings",
        element: <div>settings</div>,
      },
      {
        path: "feedback",
        element: <div>feedback</div>,
      },
    ],
  },
]);
