import { Layout1Component } from './layout-1';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { SidebarComponent } from './sidebar';
import { MenuComponent } from './menu';
import { ProfileComponent } from './profile';

export const ComponentsExport = [Layout1Component];

export const Components = [
  ...ComponentsExport,
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  MenuComponent,
  ProfileComponent,
];
