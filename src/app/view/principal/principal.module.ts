import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material-module';
import { AppPrincipalRoutingModule } from './principal-routing.module';
import { PessoasComponent } from './pessoas/pessoas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PessoasComponent
  ],
  imports: [
    CommonModule,
    AppPrincipalRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule
  ]
})
export class PrincipalModule { }
