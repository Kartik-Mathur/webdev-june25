import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4444",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
  },
});
