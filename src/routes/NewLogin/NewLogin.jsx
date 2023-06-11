import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { showError, showSuccess } from "../../Helper/Tostify.Helper";
import { configlogin } from "../../config/configlogin";
import "./NewLogin.scss";
import { Spinner } from "../../components/SpinnerComponent/Spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { GetData, LoginUser } from "../../Services/APIServices_2";
import { useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";

export const NewLogin = () => {

  const h = useLocation();

  const [states, setStates] = useState({
    username: "samjad@gmail.com",
    password: "",
    token: "",
  });

  const [check, setcheck] = useState();
  const [tokenapi, settokenapi] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [Show, setShow] = useState(false);

  const [cmp, setcmp] = useState(true);





  const login = useCallback(async (e) => {
    setIsActive((current) => !current);

    e.preventDefault();
    axios
      .post(
        `${configlogin.server_address}?grant_type=${configlogin.RESPONSE_TYPE}&client_id=${configlogin.CLIENT_ID}&client_secret=${configlogin.client_Secret}&username=${states.username}&password=${states.password}bcLjGkX1B65o0gRxdH2L4FLC8`
      )
      .then((response) => {
        setcheck(response.status);

        settokenapi(response.data.access_token);
        console.log(check);
        localStorage.setItem("tokenapi", JSON.stringify(tokenapi));
        setShow(true);

        setTimeout(() => {
          h.pathname ="/products";
          window.location.replace(h.pathname);
        }, 400);
        showSuccess("Login Successfully");
        setIsLoading(true);
      })
      .catch((error) => {
        setcheck(error.response.status);
        setTimeout(() => {
          setIsActive(false);
          showError("Login Fail");
        }, 400);
      });
  });

  useEffect(() => {
    if (tokenapi !== undefined){
      localStorage.setItem("tokenapi", JSON.stringify(tokenapi));
      }else{
      }
  }, [tokenapi]);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}>
  <div>
      <ToastContainer />

      <form class="form">

        <p class="form-title">Sales Force</p>
        <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input
            type="email"
            placeholder="Enter email"
            value={states.username}
            onChange={(event) => {
              setStates((item) => ({
                ...item,
                username: event.target.value,
              }));
            }}
          />
          <span></span>
        </div>
        <div class="input-container">
          <input
            type="password"
            placeholder="Enter password"
            value={states.password}
            onChange={(event) => {
              setStates((item) => ({
                ...item,
                password: event.target.value,
              }));
            }}
          />
        </div>
        <button
          type="submit"
          class="submit"
          style={{ cursor: "pointer" }}
          onClick={login}
        >
          Sign in
        </button>

        <p class="signup-link">
          <a href="">Sign up</a>
        </p>
      </form>
      </div>
 
      
    </div>
  );
};
