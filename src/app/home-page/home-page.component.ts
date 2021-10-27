import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cep, ceps } from '../ceps';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  cep : Cep | undefined;

  getCep(cep:string) {
    const routeParams = this.route.snapshot.paramMap;
    const numeroCepFromRoute = String(routeParams.get('numeroCep'));
    this.cep = ceps.find(cep => cep.cep === numeroCepFromRoute);
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  
}