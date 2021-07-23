import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ApiService } from '../servicios/api/api.service';
import {ResponseI} from '../modelos/response.interface';
import {AlertasService} from '../servicios/aleretas/alertas.service'
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  registerForm = new FormGroup ({
    nombre1 : new FormControl ('', Validators.required),
    nombre2 : new FormControl ('', Validators.required),
    apellido1 : new FormControl ('', Validators.required),
    apellido2 : new FormControl ('', Validators.required),
    username : new FormControl ('', Validators.required),
    pass: new FormControl ('', Validators.required),
    email : new FormControl ('', Validators.required),
    efechac : new FormControl ('', Validators.required),
    fechamod : new FormControl ('', Validators.required),
  })

  constructor(private api:ApiService, private router:Router, private alertas:AlertasService) { }
  errosStatus:boolean = false;
  errorMsj:any =""; 

  ngOnInit(): void {
  }
  registerOn(form:any){
    console.log(form)
    this.api.newRegister(form).subscribe(data =>{
      let dataResponse:ResponseI = data; 
      console.log("Todo bien hasta aca",data);
      if (dataResponse.status != "ok"){
      //  localStorage.setItem("token",dataResponse.result.token);
          console.log("Se creo usuario");
        this.alertas.showSuccess('Usuario creado', 'Hecho');
       }else{
         this.alertas.showSuccess('Usuario no creado', 'Hecho');
         this.errosStatus = true;
         this.errorMsj = dataResponse.result.error_msg; 
       }
    })
  }

}
