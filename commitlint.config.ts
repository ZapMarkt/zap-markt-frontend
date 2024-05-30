const Configuration = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-atom",
  formatter: "@commitlint/format",
  rules: {
    "type-enum": [
      2,
      "always",
      ["chore", "build", "ci", "docs", "feat", "fix", "perf", "refactor", "style", "test"],
    ],
  },
};

export default Configuration;
