import { ApiService } from "./apiService";

export default class AuthService extends ApiService {

  static createNews = (query) => super.get("search", {
    params: {
      q: query, 
      apikey: "a175969d8ea72210cd78219e7f609a10", 
      lang: "en", 
    },
     
  });

  static newsByCategory = (data) => super.get("top-headlines", {
    params: {
      category: data,
      apikey: "5ee517f0ae1c51a1f5b2e760f00cf7fc",
      
    }
  }) 
 
}