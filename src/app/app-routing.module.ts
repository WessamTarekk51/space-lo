import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
 
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
