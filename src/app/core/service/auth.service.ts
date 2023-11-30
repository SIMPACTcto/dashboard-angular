import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable()
export class AuthService {
  apiUrl = 'https://mlmcreatorsindia.com/outerapi/api.php';
  //ifscurl='https://ifsc.razorpay.com/';
  authurl = 'https://mlmcreatorsindia.com/outerapi/auth.php';

  constructor(private http: HttpClient) {}

  async checksid(userid: string, side: number) {
    userid = userid.trim();
    return await this.http
      .get(this.apiUrl + '?route=getsponsor&userid=' + userid + 'side=' + side)
      .toPromise();
  }

  async checkpin(pinno: string) {
    return await this.http
      .get(this.apiUrl + '?route=checkpin&pinno=' + pinno)
      .toPromise();
  }

  public async checkifsc(username: string) {
    return await this.http
      .get(this.authurl + '?route=getsponsorname&suserid=' + username)
      .toPromise();
  }

  async register(
    pinno: number,
    sid: string,
    uid: string,
    leftright: number,
    firstname: string,
    middlename: string,
    lastname: string,
    city: string,
    contact: string,
    ifsc: string,
    acno: string,
    bankname: string,
    pan: string,
    pincode: number
  ) {
    let body =
      '{route:register,pinno:' +
      pinno +
      ',sid:' +
      sid +
      ',uid:' +
      uid +
      ',side:' +
      leftright +
      ',firstname:' +
      firstname +
      ',lastname:' +
      lastname +
      ',middlename:' +
      middlename +
      ',city:' +
      city +
      ',contact:' +
      contact +
      ',ifsc:' +
      ifsc +
      ',acno:' +
      acno +
      ',bankname:' +
      bankname +
      ',pan:' +
      pan +
      ',pincode:' +
      pincode +
      '}';
    return await this.http.post(this.apiUrl, body, httpOptions).toPromise();
  }

  async login(username: string, password: string) {
    var base64string = btoa(username + ':' + password);
    let body = 'route=login&token=' + base64string;
    return await this.http.post(this.authurl, body, httpOptions).toPromise();
  }

  async forgotpassword(username: string, contact: string) {
    var base64string = btoa(username + ':' + contact);
    let body = '{route:forgotpassword,token=' + base64string + '}';
    return await this.http.post(this.apiUrl, body, httpOptions).toPromise();
  }

  getAuthorizationToken() {
    const authTokenString = localStorage.getItem('authToken');
    if (environment.production && authTokenString) {
      return JSON.parse(authTokenString).token;
    } else {
      return '663586F7-5B56-4E5F-92FC-B5CBDE143B98';
    }
  }
  
  setAuthorizationToken(token: string) {
    localStorage.clear();
    localStorage.setItem('authToken', token);
  }

  
logout() {
  // Clear the authentication token from localStorage
  localStorage.removeItem('authToken');

  // Add any additional logout actions here, such as navigating to the login page or notifying the server.

  // For example, if you are using Angular Router, you might navigate to the login page:
  // import { Router } from '@angular/router';
 this.router.navigate(['/login.php']);

    }
}  
