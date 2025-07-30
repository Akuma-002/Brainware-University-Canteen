import axios from 'axios';

export const addToCartAPI = async (studentCode, item) => {
  try {
    const response = await axios.post('http://localhost:2007/add-to-cart', {
      studentCode,
      item
    });
    return response.data;
  } catch (error) {
    return { success: false, message: error.message };
  }
};
