import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { LandingModule } from './landing/landing.module';
import { RouterModule } from '@angular/router';
import { NotFoundModule } from './not-found/not-found.module'
import { SuprafeteModule} from './modules/suprafete.module';
import {CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';

@NgModule({
    imports: [BrowserModule, HttpModule, AppRoutingModule, LandingModule, NotFoundModule,
                SuprafeteModule,CommonModule,FormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}