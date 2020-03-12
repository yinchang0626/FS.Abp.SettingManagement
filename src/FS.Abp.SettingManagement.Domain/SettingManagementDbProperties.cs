namespace FS.Abp.SettingManagement
{
    public static class SettingManagementDbProperties
    {
        public static string DbTablePrefix { get; set; } = "SettingManagement";

        public static string DbSchema { get; set; } = null;

        public const string ConnectionStringName = "SettingManagement";
    }
}
