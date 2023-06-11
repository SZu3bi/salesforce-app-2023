import { Button } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";

function Logut() {
    const h = useLocation();

    
  const logout = () => {
    localStorage.removeItem("tokenapi");
    h.pathname ="/";
    window.location.replace(h.pathname); 
  
  };

  return (
    <div className="home">
        <div>

        <button style={{    background: 'red',
    color: 'white'}} onClick={logout}>Logout</button>

        </div>
        
        
    </div>
  );
}

export default Logut;
