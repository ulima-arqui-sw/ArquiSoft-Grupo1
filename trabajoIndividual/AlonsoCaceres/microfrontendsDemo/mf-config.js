import * as singleSpa from 'single-spa';

singleSpa.registerApplication(
  'microfrontend1',
  () => import('mf-one'),
  pathPrefix('/mf-one')
);

singleSpa.registerApplication(
  'microfrontend2',
  () => import('mf-two'),
  pathPrefix('/mf-two')
);

singleSpa.start();
