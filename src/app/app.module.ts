import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenderPipe } from './custom_pipes/gender.pipe';
import { SquarePipe } from './custom_pipes/square.pipe';
import { CircleAreaPipe } from './custom_pipes/circle-area.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    SquarePipe,
    CircleAreaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
