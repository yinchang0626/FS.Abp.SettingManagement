export const environment = {
  production: false,
  hmr: false,
  application: {
    name: 'SettingManagement',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44361',
    clientId: 'SettingManagement_ConsoleTestApp',
    dummyClientSecret: '1q2w3e*',
    scope: 'SettingManagement',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44397',
    },
  },
  localization: {
    defaultResourceName: 'SettingManagement',
  },
};
