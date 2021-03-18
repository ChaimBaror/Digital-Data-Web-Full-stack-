import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001'
});

export default instance;


// import axios, { AxiosInstance, AxiosResponse } from 'axios';


// export default class HttpClient {
//     instance: AxiosInstance;

//     constructor() {
//         this.instance = axios.create({
//             baseURL: 'http://localhost:3001',
//         });
//     }

//     async get(url: string) {
//         let axiosResult: AxiosResponse = await this.instance({ url: url})
//     }
//     async post(url: string, data = {}, options = {}) {
//         let axiosResult: AxiosResponse = await this.instance.post(url, data, options)
//         let result: {} = {
//             data: axiosResult.data,
//             status: axiosResult.status,
//             headers: axiosResult.headers,
//             request: axiosResult.request
//         }
//         return result;
//     }
// }