export const signup = (params, success, error) => {
  $.ajax({
  method: 'POST',
  url: 'api/users',
  data: {user: params},
  success,
  error
  });
};

export const login = (params, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {user: params},
    success,
    error
  });
};

export const logout = (success, error) => {
  $.ajax({
  method: 'DELETE',
  url: 'api/session',
  success,
  error
  });
};
