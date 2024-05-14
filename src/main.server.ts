import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

const bootstrap = () => bootstrapApplication(AppModule, config);

export default bootstrap;
