import { useDispatch } from "react-redux";
import { SET } from './action';
export const FetchApi = async () => {
  const dispatch=useDispatch()
    const response = await fetch("https://rjs101xbackend.herokuapp.com/", {
      method: "GET",
    })
      .then(function (response) {
        return response.text();  
      })
      .then(function (data) {
        dispatch(SET(JSON.parse(data)));
      });
  };