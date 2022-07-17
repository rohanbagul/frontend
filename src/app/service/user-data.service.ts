import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../admin-post-operations/userData';
import { PostData } from '../post/postData';
import { loginPayload } from '../userlogin/loginPayload';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  baseUrl:String="http://localhost:8080/api/v1/auth";
  postUrl:String="http://localhost:8080/api/v1/posts"
  constructor(private http:HttpClient) {
  }
  getAllUsers():Observable<UserData[]>{
    return this.http.get<UserData[]>("http://localhost:8080/api/v1/auth/getAllUsers");
  }
  usersLogin(user:loginPayload):Observable<UserData>
    {
      return this.http.post<UserData>(this.baseUrl+"/login",user);
    }

    userRegister(user:UserData){
      this.http.post(this.baseUrl+"/register",user);
    }
    getPostsForAdmin():Observable<PostData[]>{
      return this.http.get<PostData[]>("http://localhost:8080/api/v1/posts");

    }
  }

