import { Component, OnInit } from '@angular/core';
import { Idetails } from './admin.model';
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
title: String = '##### User Details #####';
showTable: Boolean = true;
filterText: String;
admin: any[]; 

constructor(private _userService: UserService) {}
ngOnInit(): void {
  this.admin = this._userService.getUser();
}
}
