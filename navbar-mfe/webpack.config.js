const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "sephora",
    projectName: "navbar-mfe",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['postcss-loader']
        },
      ],
    },
    // modify the webpack config however you'd like to by adding to this object
  });
};
