import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionsMenuComponent } from './options-menu/options-menu.component';
import { AppLinkTileComponent } from './app-link-tile/app-link-tile.component';
import { DataRetrieverComponent } from './data-retriever/data-retriever.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsMenuComponent,
    AppLinkTileComponent,
    DataRetrieverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
