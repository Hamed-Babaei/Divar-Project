import api from "src/configs/api";

const addCategory = (data) => api.post("category", data);

const getCategory = () => api.get("category");

const deleteCategory = (categoryID) =>
  api.delete(`category/${categoryID}`, categoryID);
export { addCategory, getCategory, deleteCategory };
