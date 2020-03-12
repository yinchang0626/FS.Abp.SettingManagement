import { FsSettingManagementDto } from '../dtos';

export namespace FsSettingManagement {
    export interface State {
        settings: FsSettingManagementDto.setting[];
    }
}