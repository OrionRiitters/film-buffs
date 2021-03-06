import axios from 'axios'

export default {
  /* Verify user log-in. Then Return password hash used to tell
   * Vue app which user is logged in. Using a hash as opposed to a plaintext
   * username or password protects against other users from spoofing their
   * log in information.
   */
  sendAuth(username, password) {
    return axios
      .post('/api/auth', {
        username: username,
        password: password,
      })
      .then(res => {
        console.log(res)
        return res.data
      })
      .catch(err => {
        return err
      })
  },
  createUser(username, password, email) {
    return axios
      .post('/api/auth/create', {
        username: username,
        password: password,
        email: email,
      })
      .then(res => {
        if (res.data.name == 'SequelizeUniqueConstraintError') {
          return { error: 'UniqueConstraintError' }
        } else {
          return this.sendAuth(res.data.username, res.data.password).then(
            res => {
              return {
                statusCode: 200,
                hash: res.hash,
              }
            }
          )
        }
      })
      .catch(err => {
        return
      })
  },
  getUpcoming() {
    return axios
      .get('/api/event/upcoming')
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  getEvents() {
    return axios.get('/api/event').then(res => {
      return res.data
    })
  },
  submitComment(token, eventID, comment) {
    return axios.post('/api/comment', {
      token: token,
      eventID: eventID,
      content: comment,
    })
  },
  getComments(eventID) {
    return axios
      .get('/api/comment', {
        params: {
          eventID: eventID,
        },
      })
      .then(res => {
        return res.data
      })
  },
}
