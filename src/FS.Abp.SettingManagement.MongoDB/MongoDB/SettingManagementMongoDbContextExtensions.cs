using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Abp.SettingManagement.MongoDB
{
    public static class SettingManagementMongoDbContextExtensions
    {
        public static void ConfigureSettingManagement(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new SettingManagementMongoModelBuilderConfigurationOptions(
                SettingManagementDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}