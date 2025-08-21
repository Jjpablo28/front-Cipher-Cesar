import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CesarCipherComponent} from "./cesar-cipher/cesar-cipher.component";


const routes: Routes = [{path:'cifrado',component:CesarCipherComponent},
  {path:'**',redirectTo:'cifrado'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
