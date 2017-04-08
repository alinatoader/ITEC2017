import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import "rxjs/Rx"
//import "rxjs/add/operator/map"

@Injectable()
export class CheltuieliService {
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
    incarcaBeneficiari():Promise<any>{
        return Promise.resolve(this.http.get(this.baseUrl+"search?resource_id=ff66bc6f-20b8-4e48-9a9f-2dad0bc6f456&fields=BENEFICIAR")
        .map(res=>res.json()).toPromise());        
    }
}