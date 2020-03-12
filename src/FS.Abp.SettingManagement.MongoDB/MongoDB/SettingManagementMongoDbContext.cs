using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.SettingManagement.MongoDB
{
    [ConnectionStringName(SettingManagementDbProperties.ConnectionStringName)]
    public class SettingManagementMongoDbContext : AbpMongoDbContext, ISettingManagementMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureSettingManagement();
        }
    }
}