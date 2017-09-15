import { API_SERVER } from '../../config';

const getJSON = url => {
  return fetch(url)
    .then(response => response.json())
    .then((json) => {
      if (json.error) {
        throw Error(json.error.message);
      }
      return json;
    });
};

const postJSON = (url, jsonBody) => fetch(url, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  body: JSON.stringify(jsonBody),
})
  .then(response => response.json())
  .then((json) => {
    if (json.error) {
      throw Error(json.error.message);
    }
    return json;
  });

const patchJSON = (url, jsonBody) => fetch(url, {
  method: 'PATCH',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  body: JSON.stringify(jsonBody),
})
  .then(response => response.json())
  .then((json) => {
    if (json.error) {
      throw Error(json.error.message);
    }
    return json;
  });

const deleteJSON = (url, jsonBody = {}) => fetch(url, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  body: JSON.stringify(jsonBody),
})
  .then(response => response.json())
  .then((json) => {
    if (json.error) {
      throw Error(json.error.message);
    }
    return json;
  });

const postLogout = (url, json) => fetch(url, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  body: JSON.stringify(json),
});

export { API_SERVER, getJSON, postJSON, patchJSON, deleteJSON, postLogout };
