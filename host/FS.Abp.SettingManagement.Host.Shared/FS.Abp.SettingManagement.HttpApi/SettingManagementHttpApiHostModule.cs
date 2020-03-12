using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;

namespace FS.Abp.SettingManagement.HttpApi
{
    [DependsOn(
        typeof(FS.Abp.SettingManagement.SettingManagementApplicationModule),
        typeof(FS.Abp.SettingManagement.SettingManagementHttpApiModule),
        typeof(FS.Abp.SettingManagement.EntityFrameworkCore.SettingManagementEntityFrameworkCoreModule)
        )]
    public class SettingManagementHttpApiHostModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpAspNetCoreMvcOptions>(options =>
            {
                options.ConventionalControllers.Create(typeof(FS.Abp.SettingManagement.SettingManagementApplicationModule).Assembly, action => action.RootPath = "SettingManagement");
            });
        }
    }
}
