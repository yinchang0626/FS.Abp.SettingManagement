using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Settings;
//todo: move to framework
namespace FS.Abp.SettingManagement
{
    public interface IFactory<T>
        where T : class, new()
    {
        Task<T> CreateAsync();
    }
    public abstract class Factory<T> : IFactory<T>
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
            await CreateAsync(result).ConfigureAwait(false);
            return result;
        }

        protected abstract Task CreateAsync(T options);
    }
}