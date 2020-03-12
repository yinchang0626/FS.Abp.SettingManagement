import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicLayoutComponent, AuthGuard, PermissionGuard } from '@abp/ng.core';
import { LayoutPassportComponent, LayoutDefaultComponent } from '@fs/ng-alain/basic';
import { SettingManagementModule } from './setting-management/setting-management.module';

export function LoadSettingManagementModule() {
  return SettingManagementModule;
}

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'settings' },
  {
    path: '',
    component: LayoutDefaultComponent,
    // canActivate: [AuthGuard, PermissionGuard],
    children: [
      {
        path: 'settings',
        loadChildren: LoadSettingManagementModule
      },
    ],
  }
];
// @dynamic
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FsSettingManagementNgAlainRoutingModule { }
