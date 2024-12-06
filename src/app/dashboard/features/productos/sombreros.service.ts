import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../../data-access/base-http.service";

@Injectable({providedIn:'root'})
export class SombrerosServices extends BaseHttpService{
    getSombreros(){
        return this.htpp.get(`${this.apiUrl}/sombreros`, {responseType: 'json'});
    }

    newSombrero(sombrero:any){
        return this.htpp.post(`${this.apiUrl}/sombreros/crear`, sombrero, {responseType:'json'} );
    }
}