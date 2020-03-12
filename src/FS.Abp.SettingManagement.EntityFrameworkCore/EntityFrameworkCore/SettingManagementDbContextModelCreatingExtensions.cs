using System;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;

namespace FS.Abp.SettingManagement.EntityFrameworkCore
{
    public static class SettingManagementDbContextModelCreatingExtensions
    {
        public static void ConfigureSettingManagement(
            this ModelBuilder builder,
            Action<SettingManagementModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new SettingManagementModelBuilderConfigurationOptions(
                SettingManagementDbProperties.DbTablePrefix,
                SettingManagementDbProperties.DbSchema
            );

            optionsAction?.Invoke(options);

            /* Configure all entities here. Example:

            builder.Entity<Question>(b =>
            {
                //Configure table & schema name
                b.ToTable(options.TablePrefix + "Questions", options.Schema);
            
                b.ConfigureFullAuditedAggregateRoot();
            
                //Properties
                b.Property(q => q.Title).IsRequired().HasMaxLength(QuestionConsts.MaxTitleLength);
                
                //Relations
                b.HasMany(question => question.Tags).WithOne().HasForeignKey(qt => qt.QuestionId);

                //Indexes
                b.HasIndex(q => q.CreationTime);
            });
            */
        }
    }
}