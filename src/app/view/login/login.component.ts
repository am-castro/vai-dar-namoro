import { SnackbarComponent } from './../shared/snackbar/snackbar.component';
import { UserService } from './../../component/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faKey, faMailBulk, faLanguage, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public icons = {chave: faKey, carta: faMailBulk, language: faGlobe};

  public version = environment.version;

  constructor(
    private route: Router,
    private _user: UserService,
    private snack: SnackbarComponent 
    ) { }

  ngOnInit(): void {

  }
  public login(email: string, senha: string){
    this._user.getLogged(email, senha).subscribe(retorno=>{
      console.log(retorno);
      if(retorno.length>0){
        this._user.logged(retorno[0]);
        this.route.navigate(['navegando']);
      }else{
        this.snack.onMensagem('Email ou Senha incorretos, tente novamente.', '', 2);
      }
    })
  }
  public lang(lang: string){
    this._user.setLanguage(lang)
  }
}