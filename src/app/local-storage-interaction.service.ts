import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageInteractionService {

  currrentTimeStamp:number = Math.floor(Date.now() / 100000);
  storageTimeStamp:number;
  stampDifference:number;
  constructor() { }

deleteOldStorage(){
  if (localStorage.storageTimeStamp === null) {
    localStorage.storageTimeStamp, JSON.stringify(this.currrentTimeStamp);
  }
  if (localStorage.storageTimeStamp) {
    this.storageTimeStamp = JSON.parse(localStorage.storageTimeStamp);
    this.stampDifference = this.currrentTimeStamp - this.storageTimeStamp;
  }
  if (this.stampDifference >= 20) {
    localStorage.clear();
  }
}

setItem(name,value) {
  this.deleteOldStorage();
  localStorage.setItem(name,JSON.stringify(value));
}
getItem(name):string{
  this.deleteOldStorage();
  return JSON.parse(localStorage.getItem(name));
}
removeItem(name){
  this.deleteOldStorage();
  localStorage.removeItem(name);
}

}
