import axios from "axios";

const header = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getPosts = (token) =>
  axios.get("/api/posts", header(token)).then((response) => response.data);

export const getMyPosts = (token) =>
  axios
    .get("/api/posts/myposts", header(token))
    .then((response) => response.data);

export const getTimeMatchingPosts = (token) =>
  axios
    .get("/api/posts/matching", header(token))
    .then((response) => response.data);

export const addPost = (
  localDate,
  startPoint,
  endPoint,
  statusTime,
  location,
  statusLocation,
  category,
  statusCategory,
  notes,
  token
) =>
  axios
    .post(
      "/api/posts",
      {
        localDate,
        startPoint,
        endPoint,
        statusTime,
        location,
        statusLocation,
        category,
        statusCategory,
        notes,
      },
      header(token)
    )
    .then((response) => response.data);

export const updatePost = (
  id,
  localDate,
  startPoint,
  endPoint,
  statusTime,
  location,
  statusLocation,
  category,
  statusCategory,
  notes,
  token
) =>
  axios
    .put(
      "/api/posts/" + id,
      {
        id,
        localDate,
        startPoint,
        endPoint,
        statusTime,
        location,
        statusLocation,
        category,
        statusCategory,
        notes,
      },
      header(token)
    )
    .then((response) => response.data);

export const removePost = (id, token) =>
  axios.delete("/api/posts/" + id, header(token));
