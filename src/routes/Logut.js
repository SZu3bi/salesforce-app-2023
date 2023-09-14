import { Button } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useCallback } from "react";
import { GetMainInfo_Contact } from "../Services/APIServices_2";
import { useEffect } from "react";

function Logut() {
    const h = useLocation();
    const [user, setuser] = useState();
    const [user2, setuser2] = useState([
        'Salah Amjad','Zaid Lawi'
    ]);
    const [result, setResult] = useState();


    const GetAllData = useCallback(async () => {
        const result = await GetMainInfo_Contact();
        if (result) {
       
          const sortedResult = result.data.sort((a, b) => a.Id.localeCompare(b.Id));
          setResult(sortedResult);
        //   setuser(result[0].User_Name__c)
        } else setResult(null);
      }, []);
    
  const logout = () => {
    localStorage.removeItem("tokenapi");
    h.pathname ="/";
    window.location.replace(h.pathname); 
  
  };


  
  useEffect(() => {
    // setuser(result[0].User_Name__c)
   
    GetAllData();
}, [GetAllData]);

  return (
    <div>
    <Navbar />
    <div className="home">
<div>
{/* <div>  {user}</div> */}
    
        <div>
        <Button
                        style={{ margin: "1%" }}
                        variant="contained"
                        color="primary"
                        onClick={logout}
                      >
                     Logout
                      </Button>


        </div>
        </div>
        
    </div>
    </div>
  );
}

export default Logut;
