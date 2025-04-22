import { ApiService } from "./apiService";

export default class AuthService extends ApiService {


  static createNews = (query) => super.get('search', {
    params: {
      q: query, 
      token: 'a175969d8ea72210cd78219e7f609a10', 
      lang: 'en', 
    },
  });

}