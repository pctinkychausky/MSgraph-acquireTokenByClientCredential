import * as msal from '@azure/msal-node';
import { cloudURL, graphURL, clientId, tenantID, clientSecret } from './consts';

export async function getToken(): Promise<any> {
  const cca = new msal.ConfidentialClientApplication({
    auth: {
      clientId,
      authority: `${cloudURL}/${tenantID}`,
      clientSecret,
    }
  });
  const tokenRequest: msal.ClientCredentialRequest = {
    scopes: [`${graphURL}/.default`],
  };

  return await cca.acquireTokenByClientCredential(tokenRequest);
}
