const BASE_URL = import.meta.env.VITE_API_URL;

export const getAllBikes = async () => {
  try {
    const req = await fetch(`${BASE_URL}/bikes`);
    const data = req.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
