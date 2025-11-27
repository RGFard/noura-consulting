exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();

  //
  // 1️⃣ Patch sass-loader to silence Sass deprecation warnings
  //
  (config.module.rules || []).forEach(rule => {
    const candidates = rule.oneOf || [rule];

    candidates.forEach(subRule => {
      if (!subRule.use) return;

      const uses = Array.isArray(subRule.use) ? subRule.use : [subRule.use];

      uses.forEach(loaderEntry => {
        if (
          loaderEntry &&
          loaderEntry.loader &&
          loaderEntry.loader.includes('sass-loader')
        ) {
          loaderEntry.options = loaderEntry.options || {};
          loaderEntry.options.sassOptions = {
            ...(loaderEntry.options.sassOptions || {}),
            silenceDeprecations: [
              'import',
              'legacy-js-api',
            ],
          };
        }
      });
    });
  });

  //
  // 2️⃣ Set Webpack infrastructure logging level on the SAME config
  //
  config.infrastructureLogging = {
    ...(config.infrastructureLogging || {}),
    level: 'error', // hides PackFileCacheStrategy + other infra noise
  };

  //
  // 3️⃣ Replace the updated config
  //
  actions.replaceWebpackConfig(config);
};
