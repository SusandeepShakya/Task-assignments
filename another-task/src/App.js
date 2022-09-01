import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Components/Auth";
import Profile from "./Components/Profile";
import Dashboard from "./Components/Dashboard";

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    const u = localStorage.getItem("user");
    u && JSON.parse(u)?setUser(true) : setUser(false);
  },[])
  useEffect(()=>{
    localStorage.setItem("user",user);
  },[user])
  return (
    <>
      <Routes>
        {!user && (
          <Route path="/auth" element={<Auth authenticate={() => setUser(true)} />}></Route>
        )}
        {user && (
          <>
            <Route path="/profile" element={<Profile logout={() => setUser(false)} />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </>
        )}
        <Route path="*" element={<Navigate to ={user ? "/profile":"/auth"}/>}></Route>
      </Routes>
    </>
  );
};

export default App;
