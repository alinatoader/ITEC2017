import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import "rxjs/Rx"
//import "rxjs/add/operator/map"

@Injectable()
export class Service {
    private baseUrl: string = 'http://data.gov.ro/api/action/datastore_';
    private options: RequestOptions;
    private headers: Headers;
    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9'});
        this.options = new RequestOptions({ headers: this.headers });
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    incarcaSuprafete():Promise<any>{
        return Promise.resolve(this.http.get(this.baseUrl + "search?resource_id=574e2bee-78c0-4805-b0c0-d4bfefcebed3")
        .map(res=>res.json()).toPromise());
    }
    
    incarcaVanzari(judet:string):Promise<any>{
        return Promise.resolve(this.http.get(this.baseUrl + "search?resource_id=1290099e-bfb3-4ab4-9eaa-6e801120e407&q="+judet)
        .map(res=>res.json()).toPromise());
    }
    
}