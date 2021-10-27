import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CepListComponent } from './cep-list/cep-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CepComponent } from './cep/cep.component';

const routes: Routes = [
  {
    path: 'list',
    component: CepListComponent,
    children: [
      {
        path: 'ceps/:numeroCep',
        component: CepComponent
      }
    ]
  },
  {
    path: "",
    redirectTo: '',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
   [RouterModule.forRoot(routes)]],
  exports: [RouterModule],
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