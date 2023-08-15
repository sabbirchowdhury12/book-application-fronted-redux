import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AllBooks from "../pages/AllBooks";
import BookDeatails from "../pages/BookDeatails";
import EditBook from "../pages/EditBook";
import AddBook from "../pages/AddBook";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllBooks />,
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
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
