﻿using FS.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.SettingManagement
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(SettingManagementEntityFrameworkCoreTestModule)
        )]
    public class SettingManagementDomainTestModule : AbpModule
    {
        
    }
}
