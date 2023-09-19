import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { OnibusComponent } from './onibus/onibus.component';


const routes: Routes = [
  { path: 'layout', component: LayoutComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'usuario', component: UsuarioComponent },
      { path: 'login', component: LoginComponent }, 
      { path: 'index', component: IndexComponent }, 
      { path: 'onibus', component: OnibusComponent }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
