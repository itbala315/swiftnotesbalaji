export interface User {
  id?: number;
  guid?: string;
  name?: string;
  lastName?: string;
  firstName?: string;
  middleName?: string;
  displayName?: string;
  emailAddress?: string;
  distinguishedName?: string;
  samAccountName?: string;
  userPrincipalName?: string;
  voiceTelephoneNumber?: string;
  socketName?: string;
  roles?: string[];
  picture?: string;
  color?: string;
  status?: string;
}

export const formFields = [
  { name: 'firstName', type: 'textbox' },
  { name: 'middleName', type: 'textbox' },
  { name: 'lastName', type: 'textbox' },
  { name: 'displayName', type: 'textbox' },
  {
    name: 'emailAddress',
    type: 'textbox',
    label: 'E-Mail Address',
    placeholder: 'email@something.com',
  },
  { name: 'distinguishedName', type: 'textbox' },
  { name: 'samAccountName', type: 'textbox', label: 'Account Name' },
  { name: 'userPrincipalName', type: 'textbox', label: 'User Name' },
  { name: 'voiceTelephoneNumber', type: 'textbox', label: 'Telephone Number' },
  { name: 'picture', type: 'textbox', label: 'Picture URL' },
];
