﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 1.102.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp.Reflection;

namespace FS.Abp.SettingManagement.Core
{
    public class CorePermissionNames
    {
        public const string GroupName = "FS.Abp.SettingManagement.Core";

        public static class DevelopPage
        {
            public const string Default = GroupName + ".DevelopPage";
            public const string Create = Default + ".Create";
            public const string Edit = Default + ".Edit";
            public const string Delete = Default + ".Delete";
        }

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(CorePermissionNames));
        }
    }
}
