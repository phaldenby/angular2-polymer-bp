import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
  constructor (private http: Http) {}
  private serviceUrl = 'https://jsonplaceholder.typicode.com/';  // URL to web API

  getTest (): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.serviceUrl+"posts",options)
      .toPromise()
      // .then(result => {console.log("got some results",result)});
      .then(this.extractData)
      .catch(this.handleError);
  }

  // createUser(user):Promise<User> {
  //   let headers = new Headers({ 'Content-Type': 'application/json' });
  //   let options = new RequestOptions({ headers: headers });
  //   return this.http.post(this.serviceUrl+"users", user, options)
  //     .toPromise()
  //     .then(this.extractData)
  //     .catch(this.handleError);
  // }

  private extractData(res: Response) {
    let body = res.json();
    console.log("body", body);
    if (body.error){
      return body.error;
    } else {
      return body || { };
    }
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
