import axios from "axios";

const header = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getFriends = (token) =>
  axios.get("/api/friends", header(token)).then((response) => response.data);

export const addFriend = (token, username) =>
  axios
    .post("/api/friends/", username, header(token))
    .then((response) => response.data);

export const removeFriend = (token, username) =>
  axios.delete("/api/friends/" + username, header(token));
