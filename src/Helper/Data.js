import config from "./config";

export default class Data {
    /**
     * 
     * @param {*} path - path of our API localhost:5000/api
     * @param {*} method - GET/POST/PUT/DELETE
     * @param {*} body - body is what we get from the from submitted by the user. 
     * @param {*} requiresAuth - encodes user credentials for authorization
     * @param {*} credentials  - our encoded credentials (username, password)
     */
    api(path, method = "GET", body = null, requiresAuth = false, credentials = null) {
        const url = config.apiBaseUrl + path;

        const options = {
            method,
            header: {
                'Content-type': 'application/json; charset=utf-8',
            },
        };

        if (body !== null) {
            options.body = JSON.stringify(body)
        }

        if (requiresAuth) {
            const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`)
            console.log("btoa encoded credentials: ", encodedCredentials)

            options.header['Authrization'] = `Basic ${encodedCredentials}`
            console.log(options)
        }
        return fetch(url, options)
    }

    // Get User
    async getUser(emailAddress, password) {
        const response = await this.api(`/users`, 'GET', null, true, {
            emailAddress,
            password,
        });
        if (response.status === 200) {
            return response.json().then((data) => data);
        } else if (response.status === 401) {
            return null;
        } else {
            throw new Error();
        }
    }
    // Create User
    async createUser(user) {
        const response = await this.api('/users', 'POST', user,);
        if (response.status === 201) {
            return [];
        } else if (response.status === 400) {
            return response.json().then((data) => {
                return data.errors;
            });
        } else {
            throw new Error();
        }
    }
}
