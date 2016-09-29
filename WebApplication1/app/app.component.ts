import { Component } from '@angular/core';


@Component({
    selector: 'my-app ',
    template: `<app-title  [subtitle]="subtitle"></app-title>
               <h4>Pick a highlight color</h4>
                <div>
                  <input type="radio" name="colors" (click)="color='lightgreen'">Green
                  <input type="radio" name="colors" (click)="color='yellow'">Yellow
                  <input type="radio" name="colors" (click)="color='cyan'">Cyan
                </div>
                <p [myHighlight]="color">Highlight me!</p>
               <nav >
                <a routerLink="contact" routerLinkActive="active">Contact</a>
                <a routerLink="crisis"  routerLinkActive="active">Crisis Center</a>
                <a routerLink="heroes"  routerLinkActive="active">Heroes</a>
              </nav>
             <router-outlet></router-outlet>    
              `,
    styles: [':host {display: block;border: 1px solid black;},h4 { font-weight: bold; } ']
})
export class AppComponent {
    subtitle = '(v3)';
}
    