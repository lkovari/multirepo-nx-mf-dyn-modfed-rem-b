import type { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'nxdmfmf-remote-b',
  exposes: {
    './Routes': 'apps/nxdmfmf-remote-b/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
