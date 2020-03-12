import { Action, Selector, State, StateContext } from '@ngxs/store';
import { switchMap, tap } from 'rxjs/operators';
import { GetSettings, UpdateSettings } from '../actions';
import { FsSettingManagement } from '../models/fs-setting-management';
import { FsSettingManagementService } from '../services/fs-setting-management.service';
import { FsSettingManagementDto } from '../dtos';

@State<FsSettingManagement.State>({
    name: 'FsSettingManagementState',
    defaults: {} as FsSettingManagement.State,
})

export class FsSettingManagementState {
    @Selector()
    static getSettings({ settings }: FsSettingManagement.State): FsSettingManagementDto.setting[] {
        return settings;
    }

    constructor(private fsSettingManagementService: FsSettingManagementService) { }

    @Action(GetSettings)
    getSettings({ patchState }: StateContext<FsSettingManagement.State>, { payload }: GetSettings) {
        return this.fsSettingManagementService.getSettings(payload).pipe(
            tap(settings =>
                patchState({
                    settings
                })
            )
        );
    }

    @Action(UpdateSettings)
    updateSettings({ dispatch }: StateContext<FsSettingManagement.State>, { payload }: UpdateSettings) {
        return this.fsSettingManagementService
            .updateSettings( payload )
            .pipe(switchMap(() => (
                delete payload.data,
                dispatch(new GetSettings(payload)
            ))));
    }
}