import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import {postcss} from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'component-set',
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.scss',
  devServer:{
    openBrowser: false
  },
  plugins: [
    sass({
        includePaths: ['./node_modules'],
        injectGlobalPaths: [
   //       'src/global/mixins',
        ]
      }),
    postcss({
      plugins: [autoprefixer()]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
