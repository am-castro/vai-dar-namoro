import { SnackbarComponent } from './view/shared/snackbar/snackbar.component';
import { MaterialModule } from './material-module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './view/shared/spinner/spinner.component';
import { LoginComponent } from './view/login/login.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    LoginComponent,
    CadastroComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [
    SpinnerComponent,
    MaterialModule,
    SnackbarComponent,
    { provide: LOCALE_ID,
      useValue: sessionStorage.getItem('lang') ? sessionStorage.getItem('lang') : 'pt-BR'
    },
    { provide: MAT_DATE_LOCALE,
      useValue: sessionStorage.getItem('lang') ? sessionStorage.getItem('lang') : 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
