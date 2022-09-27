import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandingComponent } from './components/branding/branding.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CounterModule } from './features/counter/counter.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { ShoppingModule } from './features/shopping/shopping.module';

@NgModule({
  declarations: [AppComponent, BrandingComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ShoppingModule,
    CounterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
