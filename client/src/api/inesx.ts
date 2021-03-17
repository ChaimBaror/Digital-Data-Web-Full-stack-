import HttpClient from './HttpClient';

export default class BaseHttpService {

    httpClient = new HttpClient();

    async get() {
        return this.httpClient.get(`/user`) 
        .then(function (response) {
    console.log(response);
  })
    .catch(error => this._handleHttpError(error));
    }

    async post(data = {}, options = {}) {
        Object.assign(options);
        return this.httpClient.post("/user", data, options)
            .catch(error => this._handleHttpError(error));
    }

    _handleHttpError(error: any) {
        const { statusCode } = error.response.data;

        if (statusCode !== 401) {
            throw error;
        } else {
            return statusCode;
        }
    }
}