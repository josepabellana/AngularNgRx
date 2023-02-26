import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { TableContactComponent } from './table-contact/table-contact.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { contactReducer } from './contact/store/contact.reducer';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    CreateContactComponent,
    TableContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ contact: contactReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, //retains last 25 states
      logOnly: environment.production, //restrict extension to log-only mode
      autoPause:true //Pauses login and recording when window is not open
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
