import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () =>
  axios
    .get(baseUrl)
    .then((response) => response.data)
    .catch((error) => {
      alert(error);
      console.log("fail", error);
    });

const create = (newObject) =>
  axios
    .post(baseUrl, newObject)
    .then((response) => response.data)
    .catch((error) => {
      alert(error);
      console.log("fail", error);
    });

const update = (id, newObject) =>
  axios
    .put(`${baseUrl}/${id}`, newObject)
    .then((response) => response.data)
    .catch((error) => {
      alert(error);
      console.log("fail", error);
    });

export default {
  getAll,
  create,
  update,
};
