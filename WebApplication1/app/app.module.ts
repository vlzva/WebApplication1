import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
/* App Root */
import { AppComponent }   from './app.component';
/* Feature Modules */
import { ContactModule }  from './contact/contact.module';
import { CoreModule }     from './core/core.module';
import { routing }        from './app.routing';
import { HighlightDirective } from './highlight.directive';
@NgModule({
    imports: [
        BrowserModule,
        ContactModule,
        CoreModule.forRoot({ userName: 'Miss Marple' }),
        routing
    ],
    declarations: [AppComponent, HighlightDirective],
    bootstrap: [AppComponent]
})
export class AppModule { }





