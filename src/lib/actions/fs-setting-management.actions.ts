import { SettingManagementDto } from '../dtos/fs-setting-management.dto';
import { ABP } from '@abp/ng.core';

export class GetSettings{
    static readonly type = '[Settings] Get Settings';
    constructor(public payload?: SettingManagementDto.settingKey) {}
}

export class UpdateSettings {
    static readonly type = '[Settings] Update Settings';
    constructor(public payload: SettingManagementDto.settingUpdateInput) {}
}