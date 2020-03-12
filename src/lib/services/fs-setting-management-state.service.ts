import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { FsSettingManagementState } from '../states/fs-setting-management.state';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class FsSettingManagementStateService {
  constructor(private store: Store) {}

  getSettingsDetail() {
    return this.store.selectSnapshot(FsSettingManagementState.getSettings);
  }

  filterByRoute(routerName:string){
    let source = this.getSettingsDetail();
    if(!source) return null;
    _.forEach(source,element => {
      if (!element.properties.Type)
        element.properties.Type = 'String';
    });
    return _.filter(source,(x)=>{ return  _.startsWith(x.name, routerName) });

  }
}

export class FsSettingManagementParameters {
  visible: boolean = false;
  providerName: string = 'G';
  providerKey: string = undefined;
  routerName: string = null;
}