export const getQueryParameters = () => new URLSearchParams(window.location.search);

export const getQueryParameter = (key) => {
  const params = getQueryParameters();

  return params ? params.get(key) : undefined;
};

export const redirect = (url) => {
  window.location = url;
};
