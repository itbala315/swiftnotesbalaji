import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
          //children: [{ label: 'Nfts', route: '/dashboard/nfts' }],
        }
      ],
    }
  ];
}
