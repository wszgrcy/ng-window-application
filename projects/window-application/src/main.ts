// export { AppModule as module } from './app/app.module';
import {
  BootMethod,
  IconItem,
  LoadType,
} from '@ng-window/interface/desktop.interface';
export const config: IconItem = {
  name: '测试应用',
  method: BootMethod.dragdrop,
  data: {},
  config: {
    title: '测试应用',
    lazyModule: () =>
      import(
        '@window-application/app/test-application/test-application.module'
      ).then((e) => e.TestApplicationModule),
    loadType: LoadType.lazyModule,
  },
  icon: 'settings',
  iconBackground: 'rgb(0, 120, 215)',
};
