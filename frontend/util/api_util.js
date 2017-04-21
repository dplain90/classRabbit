export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session/',
    data: user
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

export const categories = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/categories'
  });
};

export const requestedTasks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/tasks'
  });
};
