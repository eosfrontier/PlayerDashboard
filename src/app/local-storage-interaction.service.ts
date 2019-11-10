import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageInteractionService {

  //The timestamping is done in minutes
  currrentTimeStamp:number = Math.floor(Date.now() / 100000);
  storageTimeStamp:number;
  stampDifference:number;
  purgeIfOlderThan:number = 20;
  constructor() { }

deleteOldStorage(){
  if (localStorage.storageTimeStamp === null) {
    localStorage.storageTimeStamp, JSON.stringify(this.currrentTimeStamp);
  }
  if (localStorage.storageTimeStamp) {
    this.storageTimeStamp = JSON.parse(localStorage.storageTimeStamp);
    this.stampDifference = this.currrentTimeStamp - this.storageTimeStamp;
  }
  if (this.stampDifference >= this.purgeIfOlderThan) {
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
