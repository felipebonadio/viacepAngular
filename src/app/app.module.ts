import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CepListComponent } from './cep-list/cep-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CepComponent } from './cep/cep.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'list', component: CepListComponent},
      { path: 'ceps/:numeroCep', component: CepComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CepListComponent,
    HomePageComponent,
    CepComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/