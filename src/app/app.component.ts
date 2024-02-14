import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FooterComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // encapsulation:ViewEncapsulation.None
  // encapsulation:ViewEncapsulation.ShadowDom,
  encapsulation:ViewEncapsulation.Emulated,


})
export class AppComponent {
  title = 'Directives'

  sdata:any = [{Roll_No:1,
    name:'John Doe',
    age:32,
    gender:'Male',loc:'Ald'
  },
  {Roll_No:2,
    name:'Anjali ',
    age:24,
    gender:'Female',loc:'Ald'
  },
  {Roll_No:3,
    name:'jyoti',
    age:25,
    gender:'Female',loc:'Patan'
  },
  {Roll_No:4,
    name:'vaishu',
    age:22,
    gender:'Female',loc:'Kanpur'
  },
  {Roll_No:5,
    name:'Ashish',
    age:25,
    gender:'Male',loc:'Ald'
  }
];

  // xname:string='Anjali'
  // hello:boolean=false


  xlogin:any;
  hello(){
    this.xlogin=true
  }

}
