import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { LayoutComponent } from './layout/layout.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {LoginComponent} from './login/login.component';
import {IndexComponent} from './index/index.component';
import {NgIf, NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { OnibusComponent } from './onibus/onibus.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    UsuarioComponent,
    LoginComponent,
    IndexComponent,
    OnibusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRadioModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    NgIf,
    NgFor,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
