import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsSettingManagementModule } from '@fs/setting-management';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { FsSettingManagementNgAlainRoutingModule } from './fs-setting-management-ng-alain-routing.module';
import { SharedModule } from './shared/shared.module';
import { SettingManagementModule } from './setting-management/setting-management.module';

@NgModule({
  imports: [
    SharedModule,
    NgAlainBasicModule,
    FsSettingManagementModule,
    FsSettingManagementNgAlainRoutingModule,
    SettingManagementModule
  ],
  exports: [
    SharedModule
  ]
})
export class FsSettingManagementNgAlainModule {}
