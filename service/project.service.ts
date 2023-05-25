import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  IEmploy } from 'src/app/service/employ';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  [x: string]: any;
  private endpoint = 'https://localhost:7121/api'

  constructor(private http :HttpClient) { }
ListEmploy:IEmploy[]=[];
//employeeData: Employ=new Employ()
               /*      onSubmit(userID:string ): Observable<any>{
                                                          
                       return this.http.post<any>(`${this.endpoint}/login`,userID);
                } */

  onSubmit(formData:any): Observable<IEmploy[]>{
                                                         
    return this.http.post<IEmploy[]>(`${this.endpoint}/login`,formData);
               } 


  
  confirm() {
   const bookingData = { userId: this.eid.ListEmploy, date:Date };
    const Bookingend = 'https://localhost:7121/api'
    return this.http.post<IEmploy>(`${Bookingend}/${this.eid.ListEmploysEid}`, bookingData );
  }
}
