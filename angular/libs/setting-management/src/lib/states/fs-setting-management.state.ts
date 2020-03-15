import { Action, Selector, State, StateContext } from '@ngxs/store';
import { switchMap, tap } from 'rxjs/operators';
import { GetSettings, UpdateSettings } from '../actions';
import { SettingManagement } from '../models/fs-setting-management';
import { SettingManagementService } from '../services/fs-setting-management.service';
import { SettingManagementDto } from '../dtos';

@State<SettingManagement.State>({
    name: 'SettingManagementState',
    defaults: {} as SettingManagement.State,
})

export class SettingManagementState {
    @Selector()
    static getSettings({ settings }: SettingManagement.State): SettingManagementDto.setting[] {
        return settings;
    }

    constructor(private SettingManagementService: SettingManagementService) { }

    @Action(GetSettings)
    getSettings({ patchState }: StateContext<SettingManagement.State>, { payload }: GetSettings) {
        return this.SettingManagementService.getSettings(payload).pipe(
            tap(settings =>
                patchState({
                    settings
                })
            )
        );
    }

    @Action(UpdateSettings)
    updateSettings({ dispatch }: StateContext<SettingManagement.State>, { payload }: UpdateSettings) {
        return this.SettingManagementService
            .updateSettings( payload )
            .pipe(switchMap(() => (
                delete payload.data,
                dispatch(new GetSettings(payload)
            ))));
    }
}