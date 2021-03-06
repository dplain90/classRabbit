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

export const edit = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: {user: user}
  });
};

export const categories = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/categories'
  });
};

export const fetchCategory = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/category/${id}`
  });
};

export const requestedTasks = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/tasks'
  });
};

export const createTask = (task) => {
  return $.ajax({
    method: 'POST',
    url: '/api/tasks',
    data: { task }
  });
};

export const fetchTaskers = (category_id, locality) => {

  return $.ajax({
    method: 'GET',
    url: '/api/taskers',
    data: {
      category_id: category_id,
      locality: locality
    }
  });
};
