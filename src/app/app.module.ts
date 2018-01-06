import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app-mat.module';
import { AppRoutingModule } from './app-routing.module';
import { ChatModule } from './chat/chat.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
	AppRoutingModule,
	ChatModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
