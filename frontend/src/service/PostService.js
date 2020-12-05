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
  title,
  localDate,
  startPoint,
  endPoint,
  statusTime,
  address,
  district,
  lat,
  lng,
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
        title,
        localDate,
        startPoint,
        endPoint,
        statusTime,
        address,
        district,
        lat,
        lng,
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
  title,
  localDate,
  startPoint,
  endPoint,
  statusTime,
  address,
  district,
  lat,
  lng,
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
        title,
        localDate,
        startPoint,
        endPoint,
        statusTime,
        address,
        district,
        lat,
        lng,
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
