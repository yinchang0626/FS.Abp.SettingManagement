import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { SettingManagementState } from './states/fs-setting-management.state';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([SettingManagementState])]
})
export class SettingManagementModule {}
