import { Injectable } from '@angular/core';
import { addAbpRoutes, eLayoutType, ABP } from '@abp/ng.core';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root',
})
export class SettingManagementConfigService {
  constructor(private store: Store) {
    const route = {
      name: 'Setting management',
      path: 'setting-management',
      parentName: 'AbpUiNavigation::Menu:Administration',
      requiredPolicy: 'FS.Abp.SettingManagement.Core.DevelopPage',
      layout: eLayoutType.application,
      order: 6,
      iconClass: 'fa fa-cog',
      children: [
        {
          path: 'settings',
          name: '系統設定',
          order: 1,
          requiredPolicy: 'FS.Abp.SettingManagement.Core.DevelopPage',
        },
      ],      
    } as ABP.FullRoute;

    addAbpRoutes(route);

    // setTimeout(() => {
    //   const tabs = getSettingTabs();
    //   if (!tabs || !tabs.length) {
    //     this.store.dispatch(new PatchRouteByName('AbpSettingManagement::Settings', { ...route, invisible: true }));
    //   }
    // });
  }
}
