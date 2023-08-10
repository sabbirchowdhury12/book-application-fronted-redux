import { useEffect } from "react";
import Main from "./layout/Main";
import { useAppDispatch } from "./redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import { setUser } from "./redux/user/userSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
      }
    });
  });
  return (
    <>
      <Main />
    </>
  );
}

export default App;
