import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

API.interceptors.request.use(

  (config) => {

    const token = localStorage.getItem("token");

    if (token) {

      config.headers.Authorization = `Bearer ${token}`;

    }

    return config;

  },

  (error) => {

    return Promise.reject(error);

  }

);

export const generateProduct = async (productData) => {
  const response = await API.post(
    "/generate",
    productData
  );

  return response.data;
};



export const getProducts = async () => {
  const response = await API.get(
    "/products"
  );

  return response.data;
};



export const getProductById = async (id) => {
  const response = await API.get(
    `/products/${id}`
  );

  return response.data;
};



export const updateProduct = async (id, productData) => {
  const response = await API.put(
    `/products/${id}`,
    productData
  );

  return response.data;
};



export const deleteProduct = async (id) => {
  const response = await API.delete(
    `/products/${id}`
  );

  return response.data;
};



export const searchProducts = async (query) => {
  const response = await API.get(
    `/search?q=${query}`
  );

  return response.data;
};