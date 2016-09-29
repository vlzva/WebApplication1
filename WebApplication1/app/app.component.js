"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.subtitle = '(v3)';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app ',
            template: "<app-title  [subtitle]=\"subtitle\"></app-title>\n               <h4>Pick a highlight color</h4>\n                <div>\n                  <input type=\"radio\" name=\"colors\" (click)=\"color='lightgreen'\">Green\n                  <input type=\"radio\" name=\"colors\" (click)=\"color='yellow'\">Yellow\n                  <input type=\"radio\" name=\"colors\" (click)=\"color='cyan'\">Cyan\n                </div>\n                <p [myHighlight]=\"color\">Highlight me!</p>\n               <nav >\n                <a routerLink=\"contact\" routerLinkActive=\"active\">Contact</a>\n                <a routerLink=\"crisis\"  routerLinkActive=\"active\">Crisis Center</a>\n                <a routerLink=\"heroes\"  routerLinkActive=\"active\">Heroes</a>\n              </nav>\n             <router-outlet></router-outlet>    \n              ",
            styles: [':host {display: block;border: 1px solid black;},h4 { font-weight: bold; } ']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map