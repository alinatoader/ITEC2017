import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { LandingModule } from './landing/landing.module';
import { RouterModule } from '@angular/router';
import { NotFoundModule } from './not-found/not-found.module'
import { SuprafeteModule} from './modules/suprafete.module';
@NgModule({
    imports: [BrowserModule, HttpModule, AppRoutingModule, LandingModule, NotFoundModule,SuprafeteModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}