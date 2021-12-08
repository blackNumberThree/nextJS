const withImages = require("next-images");

const moduleExports = withImages({
  webpack(config) {
    return config;
  },
});

module.exports = withImages({
  reactStrictMode: true,
});
