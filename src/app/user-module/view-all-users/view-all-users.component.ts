import { Component, OnInit } from '@angular/core';
import {  SaveDetailsService} from "../../services/save-details.service";

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {
  users = [];
  thead = ['Full Name', 'Photo', 'Gender', 'Email', 'Mobile', 'Category', 'Technologies']
 
  constructor(private saveDetailsService: SaveDetailsService) { }
 
  ngOnInit(): void {
    this.users = this.saveDetailsService.getUsers();
  
  }
 

}
