using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace FS.Abp.SettingManagement.EntityFrameworkCore
{
    public class SettingManagementModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public SettingManagementModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}