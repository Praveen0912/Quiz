import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig } from 'ngx-ui-loader';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizComponent } from './components/quiz/quiz.component';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#007bff',
  bgsPosition: 'center-center',
  bgsSize: 60,
  bgsType: 'ball-spin-clockwise-fade-rotating',
  pbThickness: 5, // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
