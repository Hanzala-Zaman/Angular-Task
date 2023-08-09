import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(
   [
    {
      path : '',
      pathMatch : 'full',
      redirectTo: 'list'

    },
    {
      path: 'list',
      component: ListComponent
    },
    
    {
      path: 'details',
      component: DetailsComponent
    }
   ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
