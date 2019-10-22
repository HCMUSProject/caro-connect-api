const getToken = () => {
  return localStorage.getItem('token');
};
const setToken = jwt => {
  return localStorage.setItem('token', jwt);
};

export default { getToken, setToken };
