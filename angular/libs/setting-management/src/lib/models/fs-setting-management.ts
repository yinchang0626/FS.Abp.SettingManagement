import { SettingManagementDto } from '../dtos';

export namespace SettingManagement {
    export interface State {
        settings: SettingManagementDto.setting[];
    }
}