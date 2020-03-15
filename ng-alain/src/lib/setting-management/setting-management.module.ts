import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@abp/ng.core';
// import { NgAlainBasicModule } from 'themes/ng-alain/basic/src';
import { NgAlainBasicModule } from '@fs/ng-alain/basic'
import { SharedModule } from '../shared/shared.module';
import { SettingManagementRoutingModule } from './setting-management-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [LayoutComponent, MainComponent],
  imports: [
    SharedModule,
    CoreModule,
    NgAlainBasicModule,
    SettingManagementRoutingModule
  ]
})
export class SettingManagementModule { }
