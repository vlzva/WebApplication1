import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';
import { ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';
import { routing }            from './contact.routing';
import { HighlightDirective }  from './highlight.directive';
@NgModule({
    imports: [SharedModule, routing],
    declarations: [ContactComponent, HighlightDirective],
    providers: [ContactService]
})
export class ContactModule { }


