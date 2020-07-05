export const withToken = async (request, reject, data) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return reject(null);
  }

  try {
    return await request(data);
  } catch (error) {
    localStorage.removeItem('token');
    return reject(error);
  }
};
