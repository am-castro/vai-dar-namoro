import { UserService } from './../../../component/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { faPlus, faGear, faBars, faCommentDots, faComments } from '@fortawesome/free-solid-svg-icons';
import { PessoasService } from 'src/app/component/services/pessoas/pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  public icons = {config: faGear, new: faPlus, menu: faBars, haveMessage: faCommentDots, messages: faComments}
  public pessoa: any;
  public pessoaAtual: any;

  constructor(
    private _pessoas: PessoasService,
    private _user: UserService
    ) {
      this._pessoas.getSpecifiedPeople(2).subscribe(retorno=>{
        this.pessoa = retorno[0];
      });
      
      this.pessoaAtual = this._user.getAutenticadoUser();
    }

  ngOnInit() {
  }
}