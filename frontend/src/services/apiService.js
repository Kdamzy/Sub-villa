import axios from 'axios';

const API_URL_USER = 'http://localhost:5000/api/user';
const API_URL_PRODUCT = 'http://localhost:5000/api/products';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL_USER}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL_USER}/login`, loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_URL_USER}/all-users`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_URL_USER}/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL_USER}/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${API_URL_USER}/edit-user`, { id: userId, ...userData });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const uploadProductImage = async (formData) => {
  try {
    const response = await axios.post(`${API_URL_PRODUCT}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addProduct = async (productData) => {
  try {
    const response = await axios.post(API_URL_PRODUCT, productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URL_PRODUCT);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL_PRODUCT}/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL_PRODUCT}/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(`${API_URL_PRODUCT}/${productId}`, productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
