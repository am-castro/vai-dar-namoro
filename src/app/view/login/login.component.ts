import { SnackbarComponent } from './../shared/snackbar/snackbar.component';
import { UserService } from './../../component/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faKey, faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public icons = {chave: faKey, carta: faMailBulk};

  constructor(
    private route: Router,
    private _user: UserService,
    private snack: SnackbarComponent 
    ) { }

  ngOnInit(): void {

  }
  public login(email: string, senha: string){
    this._user.getActualUser(email, senha).subscribe(retorno=>{
      if(retorno.length>0){
        localStorage.setItem('XYZKZY9D', retorno[0]);
        this.route.navigate(['navegando']);
        console.log(retorno[0]);
      }else{
        this.snack.onMensagem('Email ou Senha incorretos, tente novamente.', '', 2);
      }
    })
  }
}