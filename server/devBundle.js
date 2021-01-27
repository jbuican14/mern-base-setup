// Compile the React code using Webpack config while in dev mode
// compile methond that takes the Express app and configures it
// to use the Webpack middleware to compile, bundle and serve code (also enable hot reloading in development mode")
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './../webpack.config.client.js';

const compile = (app) => {
  if (process.env.NODE_ENV == 'development') {
    const compiler = webpack(webpackConfig);
    const middleware = webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
  }
};

export default {
  compile,
};
