import { X_TOKEN } from "../constants/Auth";

const headers = () => {
  const xToken = localStorage.getItem(X_TOKEN);
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'authorization': `Bearer ${xToken}`
  }
};

const isValidToken = () => {
  const xToken = localStorage.getItem(X_TOKEN);
  return !!xToken;
}

const defaultResponse = async (res) => {
  const status = res.status;
  res = await res.json();
  if (status === 403) {
    localStorage.removeItem(X_TOKEN);
    window.location.reload(false);
  } else if (status >= 400) {
    const message = res.message;
    return { resStatus: status, message: message }
  } else {
    return { ...res, resStatus: status }
  }
}

const get = (api, shouldBeAuth = true) => {
  if (shouldBeAuth && !isValidToken()) {
    return null;
  }
  return fetch(api, {
    headers: headers(),
    credentials: 'include',
    method: 'GET'
  })
    .then((res) => defaultResponse(res));
};

const post = (api, data, shouldBeLoggedIn = true) => {
  if (shouldBeLoggedIn && !isValidToken()) {
    return null;
  }
  return fetch(api, {
    headers: headers(),
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then((res) => defaultResponse(res));
};

const put = (api, data, shouldBeLoggedIn = true) => {
  if (shouldBeLoggedIn && !isValidToken()) {
    return null;
  }
  return fetch(api, {
    headers: headers(),
    credentials: 'include',
    method: 'PUT',
    body: JSON.stringify(data)
  })
    .then((res) => defaultResponse(res));
};

const destroy = (api) => {
  if (!isValidToken()) {
    return null;
  }
  return fetch(api, {
    headers: headers(),
    credentials: 'include',
    method: 'DELETE'
  })
    .then((res) => defaultResponse(res));
};

const toggle = (api) => {
  if (!isValidToken()) {
    return null;
  }
  return fetch(api, {
    headers: headers(),
    credentials: 'include',
    method: 'PUT'
  })
    .then((res) => defaultResponse(res));
};

export {
  headers,
  get,
  post,
  put,
  destroy,
  toggle
};