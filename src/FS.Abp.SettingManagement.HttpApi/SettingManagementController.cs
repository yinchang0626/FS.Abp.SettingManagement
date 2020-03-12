using FS.Abp.SettingManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.SettingManagement
{
    public abstract class SettingManagementController : AbpController
    {
        protected SettingManagementController()
        {
            LocalizationResource = typeof(SettingManagementResource);
        }
    }
}
