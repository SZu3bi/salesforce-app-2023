import { HttpServices_2, config_2, HttpServices } from "../config";
import { showError } from "../Helper/Tostify.Helper";
import data from "../config/token-address.json";
import axios from "axios";

let retrievedObject = JSON.parse(localStorage.getItem("tokenapi"));

localStorage.setItem("tokenapi", JSON.stringify(retrievedObject));


export const GetData = async () => {
  const result = await HttpServices.post(data.GetAddress, {
    jsonrpc: "2.0",
    method: "call",
    params: {
      pageIndex: 1,
      pageSize: 100000,
    },
  }).then((data) => data);
  // .catch((error) => showError(""));
  return result;
};


export const LoginUser =  (Db ,Name, Pass) => {
  const result =  HttpServices.post(data.LoginAddress, {
    "jsonrpc": "2.0",
    "params": {
      "db": Db,
      "login": Name,
      "password": Pass,

    }
    
  }).then((data) => data);
  return result;
};

export const GetMainInfo_Contact = async () => {
  const result = await HttpServices_2.get_con(
    `${config_2.server_address_Contact}`,
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("tokenapi"))}`,
      },
    }
  )
    .then((data) => data)
    .catch((error) => "");
  return result;
};

export const GetAmount_Contact = async () => {
  const result = await HttpServices_2.get_con(
    `${config_2.server_address_Contact_Amonut}`,
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("tokenapi"))}`,
      },
    }
  )
    .then((data) => data)
    .catch((error) => showError("Get Amount Filed"));
  return result;
};

export const CreateMainInfo_Contact = async (contact) => {
  const results = await HttpServices_2.post_con(
    `${config_2.server_address_Contact}`,
    contact,
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("tokenapi"))}`,
      },
    }
  )
    .then((data) => data)
    .catch((error) => showError("Create Filed"));
  return results;
};

export const DeleteInfo_Contact = async (id) => {
  const result = await HttpServices_2.delete_con(
    `${config_2.server_address_Contact}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("tokenapi"))}`,
      },
    }
  )
    .then((data) => data)
    .catch((error) => showError("Delete Filed"));
  return result;
};
export const Clone_Contact = async (id, body) => {
  const result = await HttpServices_2.post_con(
    `${config_2.server_address_Contact_Clone}/${id}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("tokenapi"))}`,
      },
    }
  )
    .then((data) => data)
    .catch((error) => showError("Clone Filed"));
  return result;
};

export const EditInfo_Contact = async (id, body) => {
  const result = await HttpServices_2.put_con(
    `${config_2.server_address_Contact}/${id}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("tokenapi"))}`,
      },
    }
  )
    .then((data) => data)
    .catch((error) => showError("Edit Filed"));
  return result;
};
