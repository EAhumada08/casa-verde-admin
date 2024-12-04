import { inject, Injectable } from "@angular/core";
import { BaseHttpService } from "../../data-access/base-http.service";

@Injectable({providedIn:'root'})
export class AdminService extends BaseHttpService{
    auth(adminCredentials:any){
        return this.htpp.post(`${this.apiUrl}/login/administrador`, adminCredentials, {
            responseType:'json',
        });
    }
}