import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { SettingManagementParameters } from '@fs/setting-management';

@Component({
  selector: 'fs-ng-alain-setting-management',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})

export class ModalComponent implements OnInit {
  protected _parameters = new SettingManagementParameters;

  @Input()
  get parameters(): SettingManagementParameters {
    return this._parameters;
  }

  set parameters(value: SettingManagementParameters) {
    if (value === this._parameters) return;
    this._parameters = {
      providerKey: (value.providerKey) ? value.providerKey : undefined,
      providerName: (value.providerName) ? value.providerName : 'G',
      visible: (value.visible) ? true : false,
      routerName: (value.routerName) ? value.routerName : null
    }
  }

  loading: boolean = false;
  constructor(
    
  ) { }

  ngOnInit() {
  }

  close(): void {
    this.parameters.visible = false;
  }
}
