import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cep, ceps } from '../ceps';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  cep : Cep | undefined;

  getCep(cep:string) {
    this.router.navigate(["['/ceps', cep.cep]", { relativeTo: this.route }]);
    
  }
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  
}