import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic'
import { SharedModule } from '../shared/shared.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { SettingManagementState } from '@fs/setting-management';
import { NgxsModule } from '@ngxs/store';
import { CoreModule } from '@fs/core';

@NgModule({
  declarations: [LayoutComponent, MainComponent],
  imports: [
    CoreModule,
    SharedModule,
    NgAlainBasicModule,
    SettingsRoutingModule,
    NgxsModule.forFeature([SettingManagementState])
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SettingsModule { }
