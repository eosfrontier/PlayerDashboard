import { Component } from '@angular/core'
import { LinkTileGridComponent } from './link-tile-grid/link-tile-grid.component'
import { PersonalBannerComponent } from './personal-banner/personal-banner.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonalBannerComponent, LinkTileGridComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'EosDynamic-PlayerDashboard'
}
