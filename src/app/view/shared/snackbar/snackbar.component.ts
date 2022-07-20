import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  public message = '123';

  constructor( private snack: MatSnackBar) { }

  onMensagem(mensagem: string, acao: string, duracao: number) {
    this.snack.open(mensagem, acao, {
      duration: duracao * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
