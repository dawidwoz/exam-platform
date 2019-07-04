import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    LoginScreenComponent,
    WelcomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
