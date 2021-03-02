import { Injectable } from "@angular/core";

@Injectable()

export class AuthService {

    constructor(){}

    /**
     * this method is used for checking login or not
     */
    isLoggedIn(){
        return (localStorage.getItem('accesstoken') ? true : false)
    }
}