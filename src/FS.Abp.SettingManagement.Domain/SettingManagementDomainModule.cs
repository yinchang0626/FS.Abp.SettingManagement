using Volo.Abp.Modularity;

namespace FS.Abp.SettingManagement
{
    [DependsOn(
        typeof(SettingManagementDomainSharedModule),
        typeof(Volo.Abp.SettingManagement.AbpSettingManagementDomainModule)
        )]
    public class SettingManagementDomainModule : AbpModule
    {

    }
}
