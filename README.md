# multirepo-nx-mf-dyn-modfed-rem-b
app-b-remote app of Multirepo nx microfrontend dynamic module federation

- nxdmfmf-main-host/
- nxdmfmf-remote-a/
- nxdmfmf-remote-b/
- nxdmfmf-remote-c/
- platform-contracts/
- platform-ui-shoelace/

pnpm dlx create-nx-workspace@latest nxdmfmf-remote-b-workspace \
  --preset=angular-monorepo \
  --appName=nxdmfmf-remote-b \
  --style=css \
  --packageManager=pnpm \
  --nxCloud=skip \
  --interactive=false