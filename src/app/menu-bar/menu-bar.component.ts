import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent {
  @Output()
  menuBarItemClicked: EventEmitter<string> = new EventEmitter<string>();
  onMenuBarItemClicked(item: string) {
    this.menuBarItemClicked.emit(item);
  }
  openInNewTab(url: string) {
    window.open(url);
  }
  items: MenuItem[] = [
    {
      label: 'Home',
      command: () => {
        this.onMenuBarItemClicked('home');
        
      }
    },
    {
      label: 'About',
      command: () => {
        this.onMenuBarItemClicked('about');
      }
    },
    {
      label: 'Portfolio',
      command: () => {
        this.onMenuBarItemClicked('portfolio');
      }
    }
  ]
}
