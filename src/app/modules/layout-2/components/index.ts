import { Layout2Component } from './layout-2';
import { HeaderComponent } from './header';
import { SidebarComponent } from './sidebar';
import { MainMenuButtonComponent } from './main-menu-button';
import { ThemeButtonComponent } from './theme-button';

export const ComponentsExport = [Layout2Component];

export const Components = [
  ...ComponentsExport,
  HeaderComponent,
  SidebarComponent,
  MainMenuButtonComponent,
  ThemeButtonComponent,
];
