import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent} from "./chat.component";
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,FormsModule,HttpClientModule
  ],
  declarations: [ChatComponent],
  providers: [ChatService]
})
export class ChatModule { }
