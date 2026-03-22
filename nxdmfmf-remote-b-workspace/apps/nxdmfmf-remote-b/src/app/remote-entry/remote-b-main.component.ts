import { ChangeDetectionStrategy, Component } from '@angular/core';

const LAST_UPDATE = '2025-03-22 13:43:00';

@Component({
  selector: 'app-remote-b-main',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './remote-b-main.component.html',
  styleUrl: './remote-b-main.component.css',
})
export class RemoteBMainComponent {
  protected readonly lastUpdate = LAST_UPDATE;
}
