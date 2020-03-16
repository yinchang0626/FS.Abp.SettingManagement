import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingManagementModule } from '@fs/setting-management';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { ModalComponent } from './components/fs-ng-alain-setting-management/modal/modal.component';
import { MainComponent } from './components/fs-ng-alain-setting-management/main/main.component';
import { DetailComponent } from './components/fs-ng-alain-setting-management/detail/detail.component';
import { FsNgAlainJsonEditorComponent } from './components/fs-ng-alain-json-editor/fs-ng-alain-json-editor.component';

const COMPONENT = [
  ModalComponent, MainComponent, DetailComponent, FsNgAlainJsonEditorComponent
]

@NgModule({
  declarations: [...COMPONENT],
  imports: [
    SettingManagementModule,
    NgAlainBasicModule,
    NgJsonEditorModule
  ],
  exports: [...COMPONENT,SettingManagementModule]
})
export class SharedModule { }
