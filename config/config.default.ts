import { ProjectConfig } from 'pri/client';

export default {
  publicPath: '/client-ssr',
  baseHref: '/client-ssr',
  useServiceWorker: true,
  clientServerRender: true
} as ProjectConfig;
