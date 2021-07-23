import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { ApiService } from '../servicios/api/api.service';
import {Router} from '@angular/router';
import {ResponseI} from '../modelos/response.interface';
import {AlertasService} from '../servicios/aleretas/alertas.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//nos vinculamos al formulario
loginForm = new FormGroup ({
  user : new FormControl ('', Validators.required),
  pass: new FormControl ('', Validators.required)
})
  constructor(private api:ApiService, private router:Router, private alertas:AlertasService) { }
  errosStatus:boolean = false;
  errorMsj:any =""; 

  ngOnInit(): void {
  }
  onLogin(form:any){
    console.log(form)
     this.api.loginByEmail(form).subscribe(data =>{
       let dataResponse:ResponseI = data; 
       console.log("Todo bien hasta aca",data);
       if (dataResponse.status != "ok"){
       //  localStorage.setItem("token",dataResponse.result.token);
        this.router.navigate(['dashboard']);
      var jsonstr = JSON.stringify(data);
       document.body.innerHTML = jsonstr;
         this.alertas.showSuccess('Usuario ingresado exitosamente', 'Hecho');
        }else{
          this.alertas.showSuccess('Usuario no valido', 'Hecho');
          this.errosStatus = true;
          this.errorMsj = dataResponse.result.error_msg; 
        }
     })
    }
  
}
