import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import AppRouter from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      }
    });
  }, [auth]);
  const onLogout = () => {
    signOut(auth).then(() => {
      setIsLoggedIn(false);
    });
  };
  setTimeout(onLogout, 1000 * 60 * 10); //10분지나면 로그아웃

  return <AppRouter isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
}

export default App;
