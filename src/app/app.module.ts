import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { DogComponent } from './components/dog/dog.component';
import { CatComponent } from './components/cat/cat.component';
import { FoxComponent } from './components/fox/fox.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http'


const animals: Routes = [
  {path: '' , component: MainComponent},
  {path: 'dog' , component: DogComponent},
  {path: 'cat' , component: CatComponent},
  {path: 'fox' , component: FoxComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    CatComponent,
    FoxComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(animals),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
