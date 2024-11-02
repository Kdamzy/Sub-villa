import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

export const addProduct = async (productData) => {
  try {
    const response = await axios.post(API_URL, productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export const uploadImage = async (imageData) => {
  try {
    const response = await axios.post(`${API_URL}/upload`, imageData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
