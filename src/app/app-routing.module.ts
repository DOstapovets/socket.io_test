import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "./app.component";
import {ChatComponent} from "./chat/chat.component"

export const appRoutes: Routes = [
	{path:'chat',component: ChatComponent},
	{ path: 'app', component: AppComponent},
	{ path: '', redirectTo: '/app', pathMatch: 'full' },
	{ path: '**',redirectTo: '/app'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
