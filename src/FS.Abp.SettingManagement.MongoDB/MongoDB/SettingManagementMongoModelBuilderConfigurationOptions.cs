using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.Abp.SettingManagement.MongoDB
{
    public class SettingManagementMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public SettingManagementMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}