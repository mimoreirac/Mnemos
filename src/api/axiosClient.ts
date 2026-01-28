import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://puce.estudioika.com/api/examen.php",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
