import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService, Rest, ABP } from '@abp/ng.core';
import { FsSettingManagementDto } from '../dtos/fs-setting-management.dto';

@Injectable({
    providedIn: 'root',
})
export class FsSettingManagementService {
  constructor(private rest: RestService) {}

  getSettings(params: FsSettingManagementDto.settingKey): Observable<FsSettingManagementDto.setting[]> {
    const request: Rest.Request<null> = {
      method: 'GET',
      url: '/api/SettingManagement/setting',
      params
    };

    return this.rest.request<null, FsSettingManagementDto.setting[]>(request);
  }

  updateSettings(params: FsSettingManagementDto.settingUpdateInput): Observable<null> {
    let data = params.data;
    delete params.data;
    const request: Rest.Request<null> = {
      method: 'PUT',
      url: '/api/SettingManagement/setting',
      params,
      body: data
    };

    return this.rest.request<null, null>(request);
  }
}