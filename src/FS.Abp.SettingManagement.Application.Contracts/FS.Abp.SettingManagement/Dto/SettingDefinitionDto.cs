using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.SettingManagement.Dto
{
    public class SettingDefinitionDto
    {
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
        public string Value { get; set; }
        public Dictionary<string, object> Properties { get; set; }
        public List<string> Providers { get; set; }

    }
}
