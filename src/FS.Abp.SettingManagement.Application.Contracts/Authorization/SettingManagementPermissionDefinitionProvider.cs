using FS.Abp.SettingManagement.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Abp.SettingManagement.Authorization
{
    public class SettingManagementPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            //var moduleGroup = context.AddGroup(SettingManagementPermissions.GroupName, L("Permission:SettingManagement"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<SettingManagementResource>(name);
        }
    }
}