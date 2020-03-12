using Localization.Resources.AbpUi;
using FS.Abp.SettingManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;

namespace FS.Abp.SettingManagement
{
    [DependsOn(
        typeof(SettingManagementApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class SettingManagementHttpApiModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<SettingManagementResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
