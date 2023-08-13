import Main from "./layout/Main";
import { useAppDispatch } from "./redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import { setUser } from "./redux/user/userSlice";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user.email));
    }
  });

  return (
    <>
      <Toaster position="top-center" />
      <Main />
    </>
  );
}

export default App;
