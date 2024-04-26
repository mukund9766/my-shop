import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product categories:', error);
    throw error;
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/category/${category}`);
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};