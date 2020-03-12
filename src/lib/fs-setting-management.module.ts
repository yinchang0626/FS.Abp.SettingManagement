import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { FsSettingManagementState } from './states/fs-setting-management.state';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([FsSettingManagementState])]
})
export class FsSettingManagementModule {}
