import axios from "axios";

export default axios.create({
  // baseURL: "http://housingpartments.herokuapp.com"
  baseURL: "http://127.0.0.1:8000",
});
