interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Administrator', 'Group Member', 'Accountant'],
  tenantName: 'Company',
  applicationName: 'Group Expense Tracker Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company information',
    'View group information',
    'View personal user information',
    'View expense information',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage groups', 'Manage expenses'],
  getQuoteUrl: 'https://app.roq.ai/proposal/2631e426-00d9-4f8f-9524-880b0eba492e',
};
