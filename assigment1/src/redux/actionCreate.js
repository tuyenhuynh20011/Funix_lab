import { useDispatch } from "react-redux";

export const ADD_STAFF= (data)=>{
  return {
  type: 'ADD_STAFF',
  payload:data,
  }
}
export const SET_STAFF= (data)=>{
  return {
  type: 'SET_STAFF',
  payload:data,
  }
}
export const FetchApi = () => (dispatch) => {
  return fetch("https://rjs101xbackend.herokuapp.com/")
    .then((response) => {
      return response;
    })    .then((response) => response.json())
    .then((dishes) => dispatch(SET_STAFF(dishes)));
};
export const CreateStaff = (data) => (dispatch) => {
  var Options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
 return fetch("https://rjs101xbackend.herokuapp.com/", Options)
    .then(function (response) {
      response.json();
    })
    .then(response => dispatch(ADD_STAFF(response)))
}