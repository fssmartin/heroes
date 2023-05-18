import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  message:string[]=[];

  addMessage(mesage:string):void{    
    this.message.push(mesage);
  }

  clearMessage():void{
     this.message = [];
  }

}
