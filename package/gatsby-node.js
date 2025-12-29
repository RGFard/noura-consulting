const path = require("path");

/**
 * -----------------------------------------
 * 1️⃣ Webpack config (UNCHANGED)
 * -----------------------------------------
 */
exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();

  (config.module.rules || []).forEach((rule) => {
    const candidates = rule.oneOf || [rule];

    candidates.forEach((subRule) => {
      if (!subRule.use) return;

      const uses = Array.isArray(subRule.use) ? subRule.use : [subRule.use];

      uses.forEach((loaderEntry) => {
        if (
          loaderEntry &&
          loaderEntry.loader &&
          loaderEntry.loader.includes("sass-loader")
        ) {
          loaderEntry.options = loaderEntry.options || {};
          loaderEntry.options.sassOptions = {
            ...(loaderEntry.options.sassOptions || {}),
            silenceDeprecations: ["import", "legacy-js-api"],
          };
        }
      });
    });
  });

  config.infrastructureLogging = {
    ...(config.infrastructureLogging || {}),
    level: "error",
  };

  actions.replaceWebpackConfig(config);
};

/**
 * -----------------------------------------
 * 2️⃣ Create pages (USING SLUG)
 * -----------------------------------------
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allContentfulService {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const serviceTemplate = path.resolve(
    "./src/pages/services/ServiceTemplate.js"
  );

  result.data.allContentfulService.nodes.forEach((service) => {
    createPage({
      path: `/services/${service.slug}`,
      component: serviceTemplate,
      context: {
        slug: service.slug,
      },
    });
  });
};