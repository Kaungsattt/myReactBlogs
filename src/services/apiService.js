import { defaultAxios } from "./axiosConfigure";

export class ApiService {

  static post = (url, data, config = {}) => defaultAxios.post(url, data, config);

  static get = (url, config = {}) => defaultAxios.get(url, config);

  static delete = (url, config = {}) => defaultAxios.get(url, config);

  static update = (url, data, config = {}) => defaultAxios.post(url, data, config);


}

