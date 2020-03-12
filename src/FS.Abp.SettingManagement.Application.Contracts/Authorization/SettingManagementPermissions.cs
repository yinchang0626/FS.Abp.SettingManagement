using Volo.Abp.Reflection;

namespace FS.Abp.SettingManagement.Authorization
{
    public class SettingManagementPermissions
    {
        public const string GroupName = "SettingManagement";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(SettingManagementPermissions));
        }
    }
}