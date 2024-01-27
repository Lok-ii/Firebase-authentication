import React from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "./Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const authCtx = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      Hello User!
      <Button disabled={authCtx.loading} onClick={()=>{
        authCtx.signOutFunc();
        if(Object.keys(authCtx.currentUser).length === 0) navigate("/login")
      }} className="w-100" type="submit">
        Sign out
      </Button>
    </div>
  );
};

export default Dashboard;
