import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// import { StoreModule } from '@ngrx/store';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // StoreModule.forRoot({}),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25,
    //   logOnly: false,
    //   autoPause: true,
    //   features: {
    //     pause: false,
    //     lock: true,
    //     persist: true,
    //   },
    // }),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
