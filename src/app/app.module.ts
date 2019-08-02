import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionsMenuComponent } from './options-menu/options-menu.component';
import { LinkTileGridComponent } from './link-tile-grid/link-tile-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsMenuComponent,
    LinkTileGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
