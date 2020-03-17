import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { SettingManagementNgAlainRoutingModule } from './setting-management-ng-alain-routing.module';
import { SharedModule } from './shared/shared.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  imports: [
    SharedModule,
    NgAlainBasicModule,
    SettingManagementNgAlainRoutingModule,
    SettingsModule
  ],
  exports: [
    SharedModule
  ]
})
export class SettingManagementNgAlainModule {}
