import http from 'axios'

export default {
  login (data) {
    return http.post(`/login`, data);
  },
  register (data) {
    return http.post(`/api/authentication/register`, data);
  },
  checkIfUserExsit (data) {
    return http.post(`/api/authentication/exist`, data);
  }
}
