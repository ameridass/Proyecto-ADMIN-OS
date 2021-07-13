import { Component, OnInit } from '@angular/core';
//import { LoginService } from 'src/app/servicios/login.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /*login(){
    this.loginService.loginSerive().subscribe(e => {
      
    });
 } */
}
