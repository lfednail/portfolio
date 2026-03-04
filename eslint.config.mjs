import nextConfig from "eslint-config-next";

const config = [
  {
    ignores: [".next", "node_modules", "public", "out"],
  },
  ...Object.values(nextConfig),
];

export default config;
