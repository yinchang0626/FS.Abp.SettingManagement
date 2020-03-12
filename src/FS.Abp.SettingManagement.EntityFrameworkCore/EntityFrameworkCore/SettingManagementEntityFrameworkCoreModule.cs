using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.SettingManagement.EntityFrameworkCore
{
    [DependsOn(
        typeof(SettingManagementDomainModule),
        typeof(AbpEntityFrameworkCoreModule),
        typeof(Volo.Abp.SettingManagement.EntityFrameworkCore.AbpSettingManagementEntityFrameworkCoreModule)
    )]
    public class SettingManagementEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<SettingManagementDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
            });
        }
    }
}