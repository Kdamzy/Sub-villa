import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

// Add product
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


// Upload new product
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

// Fetch all products
export const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Delete a product by ID
export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};
