using FS.Abp.SettingManagement.Dto;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace FS.Abp.SettingManagement
{
    public interface ISettingAppService : IApplicationService
    {
        Task<IEnumerable<SettingDefinitionDto>> GetListAsync(string providerName, string providerKey);
        Task UpdateAsync(IDictionary<string, string> settingValues, string providerName, string providerKey, bool forceToSet = false);
    }
}