using FS.Abp.SettingManagement.Localization;
using Volo.Abp.Application.Services;

namespace FS.Abp.SettingManagement
{
    public abstract class SettingManagementAppService : ApplicationService
    {
        protected SettingManagementAppService()
        {
            LocalizationResource = typeof(SettingManagementResource);
        }
    }
}
