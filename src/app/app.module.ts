import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { LinkTileGridComponent } from './link-tile-grid/link-tile-grid.component';
import { PersonalBannerComponent } from './personal-banner/personal-banner.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LinkTileGridComponent,
    PersonalBannerComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
    HttpClientJsonpModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
