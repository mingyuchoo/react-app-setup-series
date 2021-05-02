// relay.config.js
module.exports = {
  schema: "./data/schema.graphql",
  src: "./src",
  extensions: ["ts", "tsx"],
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  verbose: true,
  watchman: true, // <== only works if watchman = true
  watch: false,
  validate: false,
  quiet: false,
  persistOutput: undefined,
  noFutureProofEnums: true,
  language: "typescript",
  artifactDirectory: "src/__generated__",
  customScalars: {},
};
