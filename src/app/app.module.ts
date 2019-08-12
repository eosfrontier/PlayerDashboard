import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPipesModule } from 'ng-pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OptionsMenuComponent } from './options-menu/options-menu.component';
import { LinkTileGridComponent } from './link-tile-grid/link-tile-grid.component';
import { PersonalBannerComponent } from './personal-banner/personal-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsMenuComponent,
    LinkTileGridComponent,
    PersonalBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
		NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
