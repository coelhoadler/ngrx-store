import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { ReadComponent } from './read/read.component';
import { WriteComponent } from './write/write.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    WriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tutorial: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
