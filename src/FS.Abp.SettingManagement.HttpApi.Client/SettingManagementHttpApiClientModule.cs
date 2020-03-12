using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.Abp.SettingManagement
{
    [DependsOn(
        typeof(SettingManagementApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class SettingManagementHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "SettingManagement";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(SettingManagementApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
