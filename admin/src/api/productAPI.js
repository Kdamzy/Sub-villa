import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Replace with your backend URL

export const getAllProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const addProduct = async (productData) => {
  const response = await axios.post(`${BASE_URL}/products`, productData);
  return response.data;
};

export const updateProduct = async (productId, updatedData) => {
  const response = await axios.put(`${BASE_URL}/products/${productId}`, updatedData);
  return response.data;
};

export const deleteProduct = async (productId) => {
  await axios.delete(`${BASE_URL}/products/${productId}`);
};

export const uploadProductImage = async (formData) => {
  const response = await axios.post(`${BASE_URL}/products/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};
