import { ApiService } from "./apiService";

export default class AuthService extends ApiService {

  //static createNews = (query) => super.get("search", {
  //  params: {
  //    q: query, 
  //    apikey: "a175969d8ea72210cd78219e7f609a10", 
  //    lang: "en", 
  //  },
  //   
  //});

  static newsByCategory = (data) => super.get("top-headlines", {
    params: {
      category: data,
      apikey: "a175969d8ea72210cd78219e7f609a10",
      
    }
  }) 
 
}