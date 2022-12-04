import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrtUserComponent } from './crt-user/crt-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StrengthCheckComponent } from './strength-check/strength-check.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { sendingService } from './dataserve.service';
 
@NgModule({
  declarations: [
    AppComponent,
    CrtUserComponent,
    StrengthCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [sendingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
