import { headers, get } from './Defaults';

export const signIn = async (data) => {
  const res = await fetch('/login', {
    headers: headers(),
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify(data)
  });
  return await res.json();
}

export const signOut = () => {
  return fetch('/logout', {
    headers: headers(),
    method: 'GET'
  });
}

export async function forgotPassword(username) {
  return fetch('/forgot-password', {
    headers: headers(),
    credentials: 'include',
    method: 'POST',
    body: JSON.stringify({username}),
  });
}

export async function resetPassword(token, data) {
  return fetch(`/reset-password/${token}`, {
    headers: headers(),
    credentials: 'include',
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function authenticatePasswordToken(token) {
  return fetch(`/authenticate-password-token/${token}`, {
    headers: headers(),
    credentials: 'include',
    method: 'GET',
  }).then(res => res.json());
}

export const userContext = () => {
  return get('/api/user-context');
}
