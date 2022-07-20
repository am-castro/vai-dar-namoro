import { SnackbarComponent } from './view/shared/snackbar/snackbar.component';
import { MaterialModule } from './material-module';
import { NgModule } from '@angular/core';
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
    SpinnerComponent,
    MaterialModule
  ],
  providers: [
    SpinnerComponent,
    MaterialModule,
    SnackbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
