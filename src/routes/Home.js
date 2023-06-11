import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showError } from "../Helper/Tostify.Helper";
import { Contact } from "../Contact/Contact";

function Home() {
  const h = useLocation();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("tokenapi"))) {
    } else {

      h.pathname ="/";
      window.location.replace(h.pathname);     }
  }, []);
  return (
    <div className="home">
<Contact/>

    </div>
  );
}

export default Home;
