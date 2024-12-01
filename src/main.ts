// src/main.ts
import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';
import { MyApp } from './my-app';

Aurelia
  .register(RouterConfiguration)  // Register the router configuration
  .app(MyApp)  // Register the root component
  .start();  // Start the Aurelia app
