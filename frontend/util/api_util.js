export const login = (credentials) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session/',
    data: { credentials }
  });
};


export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session/'
  });

};

export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user 
  });
};
