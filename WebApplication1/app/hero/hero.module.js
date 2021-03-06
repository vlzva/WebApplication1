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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var hero_component_1 = require('./hero.component');
var hero_detail_component_1 = require('./hero-detail.component');
var hero_list_component_1 = require('./hero-list.component');
var highlight_directive_1 = require('./highlight.directive');
var hero_routing_1 = require('./hero.routing');
var HeroModule = (function () {
    function HeroModule() {
    }
    HeroModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, hero_routing_1.routing],
            declarations: [
                hero_component_1.HeroComponent, hero_detail_component_1.HeroDetailComponent, hero_list_component_1.HeroListComponent,
                highlight_directive_1.HighlightDirective
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroModule);
    return HeroModule;
}());
exports.HeroModule = HeroModule;
//# sourceMappingURL=hero.module.js.map