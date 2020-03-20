using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Settings;

namespace FS.Abp.SettingManagement
{
    public abstract class Factory<T>
        where T : class, new()
    {
        protected readonly ISettingProvider _settingProvider;
        public Factory(
            ISettingProvider settingProvider
            )
        {
            _settingProvider = settingProvider;
        }
        public virtual async Task<T> CreateAsync()
        {
            var result = new T();
            await CreateAsync(new T()).ConfigureAwait(false);
            return result;
        }
        protected abstract Task CreateAsync(T options);
    }
}
