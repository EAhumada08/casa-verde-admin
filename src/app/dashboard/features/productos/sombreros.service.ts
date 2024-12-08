import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../../data-access/base-http.service";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class SombrerosServices extends BaseHttpService{
    getSombreros(): Observable<any[]>{
        return this.htpp.get<any[]>(`${this.apiUrl}/sombreros`);
    }

    newSombrero(sombrero:any){
        return this.htpp.post(`${this.apiUrl}/sombreros/crear`, sombrero, {responseType:'json'} );
    }

    delete(id:string){
        return this.htpp.delete(`${this.apiUrl}/sombreros/${id}`, {responseType:'json'});
    }
}