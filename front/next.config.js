const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  /**
   * @type {import('next').NextConfig}
   */
  const baseConfig = {
    distDir: "dist",
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        // Not needed. Its just an example of how you can customize your routes
        "/": { page: "/home" },
      };
    },
  };

  if (phase == PHASE_DEVELOPMENT_SERVER) {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfigDev = {
      ...baseConfig,
      env: {
        MODE: "development",
      },
    };
    return nextConfigDev;
  } else {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfigProd = {
      ...baseConfig,
      cleanDistDir: true,
      compress: true,
      env: {
        MODE: "production",
      },
    };
    return nextConfigProd;
  }
};
