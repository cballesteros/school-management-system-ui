import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DrawerMenu, MENU_ITEMS } from './common/constants';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  
  title?: string
  main = true
  drawerMenu: DrawerMenu[] = MENU_ITEMS

  constructor(private authService: AuthService, private router: Router) {}

  async ngOnInit() {
    this.main = await this.authService.loggedIn()
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title = MENU_ITEMS.find(item => event.url.includes(item.path))?.label
        this.main = this.title ? true : false
        console.log(this.main);
        
      }
    })
  }

  selectedMenu(menu: DrawerMenu) {
    this.title = menu.label
    this.router.navigateByUrl(menu.path)
  }
}
