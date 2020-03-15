import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { SettingManagementNgAlainRoutingModule } from './fs-setting-management-ng-alain-routing.module';
import { SharedModule } from './shared/shared.module';
import { SettingManagementModule } from './setting-management/setting-management.module';

@NgModule({
  imports: [
    SharedModule,
    NgAlainBasicModule,
    SettingManagementNgAlainRoutingModule,
    SettingManagementModule
  ],
  exports: [
    SharedModule
  ]
})
export class SettingManagementNgAlainModule {}
