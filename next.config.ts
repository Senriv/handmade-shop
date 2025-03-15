import { NextConfig } from "next";
import { Configuration, RuleSetRule } from "webpack";

const withImages = require("next-images");

const nextConfig: NextConfig = withImages({
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/shop",
        permanent: true,
      },
    ];
  },

  webpack(config: Configuration) {
    if (!config.module) {
      config.module = { rules: [] };
    }
    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.module.rules = config.module.rules.filter(
      (rule): rule is RuleSetRule => {
        return !!rule && typeof rule === "object" && "test" in rule
          ? !(rule.test instanceof RegExp && rule.test.test(".svg"))
          : true;
      }
    );

    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});

export default nextConfig;
