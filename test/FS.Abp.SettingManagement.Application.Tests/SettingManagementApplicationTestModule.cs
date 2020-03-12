using Volo.Abp.Modularity;

namespace FS.Abp.SettingManagement
{
    [DependsOn(
        typeof(SettingManagementApplicationModule),
        typeof(SettingManagementDomainTestModule)
        )]
    public class SettingManagementApplicationTestModule : AbpModule
    {

    }
}
