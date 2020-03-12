using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Abp.SettingManagement
{
    [DependsOn(
        typeof(SettingManagementHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class SettingManagementConsoleApiClientModule : AbpModule
    {
        
    }
}
