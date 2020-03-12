using FS.Abp.SettingManagement.Dto;
using FS.Abp.SettingManagement.Localization;
using Microsoft.Extensions.Localization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Json;
using Volo.Abp.Localization;
using Volo.Abp.SettingManagement;
using Volo.Abp.Settings;
using Volo.Abp.Threading;

namespace FS.Abp.SettingManagement
{
    public class SettingAppService : SettingManagementAppService, ISettingAppService
    {
        private readonly IStringLocalizerFactory _stringLocalizerFactory;
        private readonly ISettingDefinitionManager _settingDefinitionManager;
        private readonly ISettingManager _settingManager;
        private readonly ISettingProvider _settingProvider;

        public SettingAppService(
            IStringLocalizerFactory stringLocalizerFactory,
            ISettingDefinitionManager settingDefinitionManager,
            ISettingManager settingManager,
            ISettingProvider settingProvider)
        {
            this._stringLocalizerFactory = stringLocalizerFactory;
            this._settingDefinitionManager = settingDefinitionManager;
            this._settingManager = settingManager;
            this._settingProvider = settingProvider;
        }
        public Task<IEnumerable<SettingDefinitionDto>> GetListAsync(string providerName, string providerKey)
        {
            var settingDefinitions = _settingDefinitionManager.GetAll();
            var result = settingDefinitions.Select(x =>
            {
                var item = new SettingDefinitionDto();
                item.Name = x.Name;
                item.DisplayName = x.DisplayName?.Localize(_stringLocalizerFactory)?.Value;
                item.Description = x.Description?.Localize(_stringLocalizerFactory)?.Value;
                item.Properties = x.Properties;
                item.Providers = x.Providers;
                item.Value = AsyncHelper.RunSync(() => string.IsNullOrEmpty(providerName) ? _settingProvider.GetOrNullAsync(x.Name) : _settingManager.GetOrNullAsync(x.Name, providerName, providerKey));
                return item;
            });
            return Task.FromResult(result);
        }
        public async Task UpdateAsync(IDictionary<string, string> settingValues, string providerName, string providerKey, bool forceToSet = false)
        {
            if (string.IsNullOrEmpty(providerName)) providerName = Volo.Abp.Settings.GlobalSettingValueProvider.ProviderName;
            foreach (var kv in settingValues)
            {
                await _settingManager.SetAsync(kv.Key, kv.Value, providerName, providerKey, forceToSet);
            }
        }
    }
}