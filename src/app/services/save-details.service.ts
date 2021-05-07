import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveDetailsService {
  allUser = [];
 
  constructor() { }
  
  getUsers() {
    return this.allUser;
  }
  
  addUser(user) {
    this.allUser.push(user);
  }
 
}
