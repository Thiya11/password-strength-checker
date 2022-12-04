import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class sendingService{

    baseUrl = 'http://localhost:3006/user/new/post'
    payloadurl = 'http://localhost:3001/login'

    constructor(private http:HttpClient){}
    addUser(data){
        const headers = {"content-type":'application/json'}
        const body = JSON.stringify(data)
        console.log(body)
        return this.http.post(this.baseUrl,body,{'headers':headers, withCredentials:true})
    }

    getPayload(){

        const headers = {"content-type":'application/json'}
        return this.http.get(this.payloadurl,{'headers':headers})
        
    }

}
