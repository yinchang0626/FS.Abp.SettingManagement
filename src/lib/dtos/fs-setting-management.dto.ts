export namespace FsSettingManagementDto {
    
    export interface settingKey {
        providerName: string,
        providerKey: string
    }
    
    export interface settingUpdateInput extends settingKey {
        forceToSet: boolean;
        data: any
    }

    export interface setting {
        name: string,
        displayName: string,
        description: string,
        value: string,
        properties: any,
        providers: Array<string>
    }
}
