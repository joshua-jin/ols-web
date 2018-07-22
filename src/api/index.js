import http from 'axios'

export default {
  login (data) {
    return http.post(`/user/login`, data)
  }
}
