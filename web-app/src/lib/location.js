// @flow

export const getQueryParameters = () => new URLSearchParams(window.location.search);

export const getQueryParameter = (key: string) => {
  const params = getQueryParameters();

  if (!params) {
    return '';
  }

  return params.get(key) || '';
};

export const redirect = (url: string) => {
  window.location = url;
};
