const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    "process.env": {
      VUE_APP_API_BASE_URL: process.env.VUE_APP_API_BASE_URL,
      VUE_APP_OTHER_ENV_VARIABLE: process.env.VUE_APP_OTHER_ENV_VARIABLE,
    },
  },
});
