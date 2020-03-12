using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Abp.SettingManagement.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.Validation.Localization;

namespace FS.Abp.SettingManagement
{
    [DependsOn(
        typeof(AbpLocalizationModule),
        typeof(Volo.Abp.Validation.AbpValidationModule),
        typeof(Volo.Abp.SettingManagement.AbpSettingManagementDomainSharedModule)
    )]
    public class SettingManagementDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<SettingManagementDomainSharedModule>("FS.Abp.SettingManagement");
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<SettingManagementResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/SettingManagement");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("SettingManagement", typeof(SettingManagementResource));
            });
        }
    }
}
