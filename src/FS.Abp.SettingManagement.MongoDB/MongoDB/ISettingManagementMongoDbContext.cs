using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.SettingManagement.MongoDB
{
    [ConnectionStringName(SettingManagementDbProperties.ConnectionStringName)]
    public interface ISettingManagementMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
