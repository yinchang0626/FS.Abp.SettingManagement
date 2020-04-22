import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicLayoutComponent, AuthGuard, PermissionGuard } from '@abp/ng.core';
import { SettingsModule } from './settings/settings.module';

export function LoadSettingManagementModule() {
  return SettingsModule;
}

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'settings' },
  {
    path: '',
    component: DynamicLayoutComponent,
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
export class SettingManagementNgAlainRoutingModule { }