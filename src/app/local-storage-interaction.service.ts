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

setItem(name,value) {
  localStorage.setItem(name,JSON.stringify(value));
}
getItem(name):string{
  return JSON.parse(localStorage.getItem(name));
}
removeItem(name){
  localStorage.removeItem(name);
}

checkDelete(){
  if (localStorage.tiles && localStorage.personalisation){
    localStorage.removeItem("joomlaInfoBlock");
    localStorage.removeItem("characterInfoBlock");
    localStorage.removeItem("skillIndexBlock");
    localStorage.removeItem("tiles");
    localStorage.removeItem("personalisation");
  }
}


}
