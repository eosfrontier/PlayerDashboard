import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LinkTileGridComponent } from './link-tile-grid/link-tile-grid.component';
import { PersonalBannerComponent } from './personal-banner/personal-banner.component';

@NgModule({
  declarations: [AppComponent, LinkTileGridComponent, PersonalBannerComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
