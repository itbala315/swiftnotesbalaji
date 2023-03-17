import { Layout3Component } from './layout-3';
import { BrandComponent } from './brand';
import { MenuButtonComponent } from './menu-button';
import { MenuComponent } from './menu';
import { UserProfileComponent } from './user-profile';
import { MainMenuItemsComponent } from './main-menu-items';

export const ComponentsExport = [Layout3Component];

export const Components = [
  ...ComponentsExport,
  BrandComponent,
  MenuButtonComponent,
  MenuComponent,
  MainMenuItemsComponent,
  UserProfileComponent,
];
