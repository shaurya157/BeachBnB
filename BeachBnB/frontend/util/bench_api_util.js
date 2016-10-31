export const fetchBenches = (success) => (
  $.ajax({
    method: 'GET',
    url: 'api/benches',
    success,
    error: (data) => console.log(data)
  })
);
