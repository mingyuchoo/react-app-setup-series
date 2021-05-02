const system = "sleepy-plains";
module.exports = {
  schema: `./data/${system}.graphql`,
  src: `./src/systems/${system}/`,
  extensions: ["ts", "tsx"],
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  verbose: true,
  watchman: false, // <== only works if watchman = true
  watch: false,
  validate: false,
  quiet: false,
  persistOutput: undefined,
  noFutureProofEnums: true,
  language: "typescript",
  artifactDirectory: `src/systems/${system}/__generated__/`,
  customScalars: {},
};
