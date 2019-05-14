import axios from 'axios';

export default {

    /* Verify user log-in. Then Return password hash used to tell
     * Vue app which user is logged in. Using a hash as opposed to a plaintext
     * username or password protects against other users from spoofing their
     * log in information. 
     */
    sendAuth(username, password) {
        return axios.post('/api/auth', {
            username: username,
            password: password
        }).then(res => {
            console.log(res);
            return res.data;
        }).catch(err => {
            console.log(err);
        });
    },
    createUser(username, password, email) {
        return axios.post('/api/auth/create', {
            username: username,
            password: password,
            email: email
        }).then(res => {
            console.log(res);
            if (res.data.name == "SequelizeUniqueConstraintError") {
                return {error: "UniqueConstraintError"};
            } else {
                this.sendAuth(res.data.username, res.data.password);
                return {statusCode: 200};
            }
        }).catch(err => {
            console.log(err);
        });
    }
};
