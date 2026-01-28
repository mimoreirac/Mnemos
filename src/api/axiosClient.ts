import axios from "axios";

const axiosClient = axios.create({
  baseURL: "/api/examen.php",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
