const API_URL = 'http://localhost:5000';

async function fetchAPI(url) {
  let responseObject = { errorMessage: '', data: [] };

  try {
    const response = await fetch(API_URL + url);
    if (!response.ok) throw new Error(`HTTP ERROR: ${response.status}`);
    const data = await response.json();
    responseObject.errorMessage = '';
    responseObject.data = data;
  } catch (error) {
    responseObject.errorMessage = error.message;
  }

  return responseObject;
}

export const getCategories = async () => {
  return fetchAPI('/categories');
};

export const getProducts = async (catId) => {
  return fetchAPI('/products?catId=' + catId);
};

export const getAllProducts = () => {
  return fetchAPI('/products');
};

export const getProductById = (id) => {
  return fetchAPI('/products/' + id);
};
