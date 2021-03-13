import axios from "axios";
export default axios.create({
  baseURL: "https://newsapi.org/v2",

  headers: {
    "X-Api-Key": "05987345ff48426ea3e03411dc677b79",
  },
});
