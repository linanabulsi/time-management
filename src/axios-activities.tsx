import axios from "axios";

const instance = axios.create({
  baseURL: "https://time-management-5d348-default-rtdb.firebaseio.com/",
});

export default instance;
