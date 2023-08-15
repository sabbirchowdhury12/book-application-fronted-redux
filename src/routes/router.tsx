import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AllBooks from "../pages/AllBooks";
import BookDeatails from "../pages/BookDeatails";
import EditBook from "../pages/EditBook";
import AddBook from "../pages/AddBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/allbook",
        element: <AllBooks />,
      },
      {
        path: "/books/:id",
        element: <BookDeatails />,
      },
      {
        path: "/edit/:id",
        element: <EditBook />,
      },
      {
        path: "/addbook",
        element: <AddBook />,
      },
    ],
  },
]);

export default router;
