import axios from "axios";

const header = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getPosts = (token) =>
  axios.get("/api/posts", header(token)).then((response) => response.data);
