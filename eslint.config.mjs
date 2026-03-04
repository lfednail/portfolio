import next from "eslint-config-next";

const config = [
  {
    ignores: [".next", "node_modules", "public", "out", "**/*.js"],
  },
  ...next({
    typescript: true,
    appDir: true,
  }),
];

export default config;
