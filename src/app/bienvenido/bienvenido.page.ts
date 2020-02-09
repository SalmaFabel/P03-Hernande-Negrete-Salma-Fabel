import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

  import { from } from 'rxjs';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {

  constructor(private router:Router) {

   }

  ngOnInit() {

    setTimeout(()=>{
this.router.navigateByUrl('login');
    },5000);
  }

}
